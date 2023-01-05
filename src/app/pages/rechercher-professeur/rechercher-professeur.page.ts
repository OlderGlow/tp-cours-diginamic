import { Component, OnInit } from '@angular/core';
import {ProfesseurService} from "../../services/professeur.service";
import {Professeur} from "../../models/professeur";

@Component({
  selector: 'app-rechercher-professeur',
  templateUrl: './rechercher-professeur.page.html',
  styleUrls: ['./rechercher-professeur.page.scss'],
})
export class RechercherProfesseurPage implements OnInit {

  professeurs: Professeur[] = [];
  constructor(private professeurService: ProfesseurService) { }

  ngOnInit() {
  }

  searchProfesseur(searchTerm: any) {
    this.professeurService.searchProfesseur(searchTerm.target.value).then((professeur) => {
      if(professeur){
        this.professeurs = professeur;
      }
    });
  }

}
