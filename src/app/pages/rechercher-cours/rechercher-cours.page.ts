import { Component, OnInit } from '@angular/core';
import {Cours} from "../../models/cours";
import {CoursServiceService} from "../../services/cours-service.service";

@Component({
  selector: 'app-rechercher-cours',
  templateUrl: './rechercher-cours.page.html',
  styleUrls: ['./rechercher-cours.page.scss'],
})
export class RechercherCoursPage implements OnInit {

  cours: Cours[] = [];
  value: String = "";
  constructor(private coursService: CoursServiceService) { }

  ngOnInit() {
  }

  public searchCours(searchTerm: any){
    this.coursService.searchCours(searchTerm.target.value).then((cours) => {
      if(cours){
        this.cours = cours;
      }
    });
  }

}
