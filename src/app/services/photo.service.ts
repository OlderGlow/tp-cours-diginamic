import {Injectable} from '@angular/core';
import {Preferences} from "@capacitor/preferences";
import {Photos} from "../models/photos";
import {Directory, Filesystem} from "@capacitor/filesystem";
import {Camera, CameraResultType, CameraSource, Photo} from "@capacitor/camera";
import {ApiService} from "./api.service";
import {BehaviorSubject, Subject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: Photos[] = [];
  $idSub: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  /**
   * Ma clé pour le Storage : LocalStorage par exemple pour un browser
   */
  private PHOTO_STORAGE = 'photos';


  constructor(private api: ApiService) {
  }

  public async loadSaved() {
    const photoList = await Preferences.get({
      key: this.PHOTO_STORAGE
    });
    if (typeof photoList.value === "string") {
      this.photos = JSON.parse(photoList.value) || [];
    }
    // Display the photo by reading into base64 format
    for (const photo of this.photos) {
      // Read each saved photo's data from the Filesystem
      const readFile = await Filesystem.readFile({
        path: photo.filePath,
        directory: Directory.Data,
      });

      // Web platform only: Load the photo as base64 data
      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    }
  }

  public getOnePhoto(id: number){
    let urlPhoto = new Subject<any>;
    this.api.getOnePhoto(id).subscribe(async (data) => {
      const readFile = await Filesystem.readFile({
        path: data.filePath,
        directory: Directory.Data,
      });

      // Web platform only: Load the photo as base64 data
      urlPhoto.next(data.webviewPath = `data:image/jpeg;base64,${readFile.data}`);
    })
    return urlPhoto.asObservable();
  }

  public async deletePicture(webviewPath: string) {
    const photoList = await Preferences.get({key: this.PHOTO_STORAGE})
    if (typeof photoList.value === "string") {
      this.photos = JSON.parse(photoList.value)
    }

    let index = 0;
    for(const photo of this.photos){
      index += 1;
      if (photo.webviewPath == webviewPath){
        await Filesystem.deleteFile({
          path: photo.filePath,
          directory: Directory.Data
        })
        break;
      }
    }

    this.photos.splice(index, 1);
    await Preferences.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos)
    })
  }

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto(
      { resultType: CameraResultType.Uri, source: CameraSource.Camera, quality: 100 });

    /**
     * On sauve la capture de la webcam en fichier au format UserPhoto
     * pour charger le tableau photos
     */
    let saveImageFile = await this.savePicture(capturedPhoto);
    this.photos.unshift(saveImageFile);
    this.api.postPhoto(saveImageFile).subscribe((data) => {
      if (data.id != null) {
        this.$idSub.next(data.id);
      }
    });


    /**
     * Prefences.set(....)
     */
  }

  /**
   * On prend en paramètre la photo
   * on la transforme en Base64 pour le stockage
   * pour qu'il soit unique on crée un fichier avec la date().getTime (long) avec l'extension .jpeg
   * Puis on crée le fichier : Filesystem de capacitor (IOS ANDROID LINUX MAC WINDOWS BROWSER)
   *
   * ON CONVERTIE LE DUMP MEMOIRE DE LA PHOTO EN FICHIER JPEG
   *
   * @param photo
   * @returns
   */
  private async savePicture(photo: Photo){
    const base64Data = await this.readAsBase64(photo);
    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    });

    return {
      filePath: fileName,
      webviewPath: photo.webPath,
    };
  }

  /**
   * On converti la photo en format Base 64
   *
   * @param photo
   * @returns
   */
  private async readAsBase64(photo: Photo) {
    // @ts-ignore
    const response = await fetch(photo.webPath);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;
  }

  /**
   * le fichier Binaire en Base 64
   *
   * @param blob
   * @returns
   */
  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
}
