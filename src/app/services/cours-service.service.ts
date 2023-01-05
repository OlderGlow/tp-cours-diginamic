import { Injectable } from '@angular/core';
import {Cours} from "../models/cours";
import {Preferences} from '@capacitor/preferences';
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class CoursServiceService {
  private COURS_STORAGE = 'course';

  public cours: Cours[] = [];

  constructor(private apiService: ApiService) {
    this.getCours().then(() => {
      return;
    })
  }

  public getCours(){
    return new Promise<void>((resolve, reject) => {
      this.apiService.getCours().subscribe((cours) => {
        this.cours = cours;
        resolve();
      })
    })
  }

  public async deleteCours(cours: Cours) {
    if(cours.id > -1){
      this.cours.find((item, index) => {
        if(item.id === cours.id) {
          this.cours.splice(index,1);
        }
      })
    }
    await Preferences.set({
      key: this.COURS_STORAGE,
      value: JSON.stringify(this.cours)
    });

    this.apiService.deleteCours(cours);
  }

  public async saveCours(cours: Cours){
    this.cours.push(cours);

    await Preferences.set({
      key: this.COURS_STORAGE,
      value: JSON.stringify(this.cours)
    });

    this.apiService.postCours(cours);
  }

  // @ts-ignore
  public async searchCours(searchTerm: string){
    const coursList : Cours[] = [];
    for(const cours of this.cours){
      if(searchTerm.toUpperCase() === cours.nom.toUpperCase() || searchTerm.toUpperCase() === cours.nomProf.toUpperCase()){
        coursList.push(cours);
      }
    }
    if(coursList){
      return coursList;
    }
    return null;
}}
