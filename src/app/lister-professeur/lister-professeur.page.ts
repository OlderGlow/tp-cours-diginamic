import { Component, OnInit } from '@angular/core';
import {ProfesseurService} from "../professeur.service";
import {Professeur} from "../professeur";
import {PhotoService} from "../photo.service";

@Component({
  selector: 'app-lister-professeur',
  templateUrl: './lister-professeur.page.html',
  styleUrls: ['./lister-professeur.page.scss'],
})
export class ListerProfesseurPage implements OnInit {

  professeurs: Professeur[] = [];
  toggleNom: Boolean = false;
  togglePrenom: Boolean = false;
  toggleAge: Boolean = false;
  constructor(private professeurService: ProfesseurService, public photoService: PhotoService) { }

  ngOnInit() {
    this.professeurService.getProfesseurs().then(() => {
      this.professeurs = this.professeurService.professeurs;
    });
    this.photoService.loadSaved().then(() => {
      console.log(this.photoService.photos);
    });
  }

  deleteProfesseur(professeur: Professeur) {
    this.professeurService.deleteProfesseur(professeur).then(() => {
      this.professeurs = this.professeurService.professeurs;
    })
  }

  sortByNom() {
    if(this.toggleNom) {
      this.professeurs.sort((a, b) => (a.nom > b.nom) ? 1 : -1);
    } else {
      this.professeurs.sort((a, b) => (a.nom > b.nom) ? -1 : 1);
    }
    this.toggleNom = !this.toggleNom;
  }

  sortByPrenom() {
    if(this.togglePrenom) {
      this.professeurs.sort((a, b) => (a.prenom > b.prenom) ? 1 : -1);
    } else {
      this.professeurs.sort((a, b) => (a.prenom > b.prenom) ? -1 : 1);
    }
    this.togglePrenom = !this.togglePrenom;
  }

  sortByAge() {
    if(this.toggleAge) {
      this.professeurs.sort((a, b) => (a.age > b.age) ? 1 : -1);
    } else {
      this.professeurs.sort((a, b) => (a.age > b.age) ? -1 : 1);
    }
    this.toggleAge = !this.toggleAge;
  }
}
