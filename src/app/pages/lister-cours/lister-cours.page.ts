import { Component, OnInit } from '@angular/core';
import {Cours} from "../../models/cours";
import {CoursServiceService} from "../../services/cours-service.service";

@Component({
  selector: 'app-lister-cours',
  templateUrl: './lister-cours.page.html',
  styleUrls: ['./lister-cours.page.scss'],
})
export class ListerCoursPage implements OnInit {

  cours: Cours[] = [];
  toggleNomCours: Boolean = false;
  toggleNomProf: Boolean = false;
  toggleNbEleve: Boolean = false;
  constructor(private coursService: CoursServiceService) { }

  ngOnInit() {
    this.coursService.getCours().then(() => {
      this.cours = this.coursService.cours;
    })
  }

  sortByNomCours() {
    if(this.toggleNomCours) {
    this.cours.sort((a, b) => {
      return a.nom.localeCompare(b.nom);
    })} else {
      this.cours.sort((a, b) => {
        return b.nom.localeCompare(a.nom);
      })
    }
    this.toggleNomCours = !this.toggleNomCours;
  }

  sortByNbEleves() {
  if(this.toggleNbEleve) {
    this.cours.sort((a, b) => {
      return a.nbEleves - b.nbEleves;
    })} else {
      this.cours.sort((a, b) => {
        return b.nbEleves - a.nbEleves;
      })
    }
    this.toggleNbEleve = !this.toggleNbEleve;
  }

  sortByProfesseur() {
    if(this.toggleNomProf) {
      this.cours.sort((a, b) => {
        return a.nomProf.localeCompare(b.nomProf);
      })} else {
        this.cours.sort((a, b) => {
          return b.nomProf.localeCompare(a.nomProf);
        })
      }
      this.toggleNomProf = !this.toggleNomProf;
  }

  deleteCourse(cours: Cours) {
    this.coursService.deleteCours(cours).then(() => {
      this.cours = this.coursService.cours;
    });
  }
}
