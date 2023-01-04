import { Component, OnInit } from '@angular/core';
import {ProfesseurService} from "../professeur.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PhotoService} from "../photo.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ajouter-professeur',
  templateUrl: './ajouter-professeur.page.html',
  styleUrls: ['./ajouter-professeur.page.scss'],
})
export class AjouterProfesseurPage implements OnInit {

  form: FormGroup = new FormGroup({
    id: new FormControl(Math.floor(Math.random() * 1000)),
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    urlPhoto: new FormControl(''),
    age: new FormControl('', Validators.required),
  });
  constructor(private professeurService: ProfesseurService, public photoService: PhotoService, private router: Router) { }

  ngOnInit() {
  }

  async onSubmit() {
    await this.professeurService.addProfesseur(this.form.value);
    await this.router.navigate(['/lister-professeur']);
  }

  onAddPhoto() {
    this.photoService.addNewToGallery().then(() => {
      this.form.value.urlPhoto = this.photoService.photos[0].webviewPath;
    });
  }

}
