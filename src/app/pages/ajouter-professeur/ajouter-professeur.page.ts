import { Component, OnInit } from '@angular/core';
import {ProfesseurService} from "../../services/professeur.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PhotoService} from "../../services/photo.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ajouter-professeur',
  templateUrl: './ajouter-professeur.page.html',
  styleUrls: ['./ajouter-professeur.page.scss'],
})
export class AjouterProfesseurPage implements OnInit {

  form: FormGroup = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    idPhoto: new FormControl(0),
    age: new FormControl('', Validators.required),
  });

  photo: any;
  constructor(private professeurService: ProfesseurService, public photoService: PhotoService, private router: Router) { }

  ngOnInit() {
  }

  async onSubmit() {
    await this.professeurService.addProfesseur(this.form.value);
    this.form.reset();
    await this.router.navigate(['/lister-professeur']);
  }

  onAddPhoto() {
    this.photoService.addNewToGallery().then((res) => {
      this.photoService.$idSub.subscribe((id) => {
        this.form.value.idPhoto = id;
      })
    });
  }

}
