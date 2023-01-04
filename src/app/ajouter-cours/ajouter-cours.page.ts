import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {CoursServiceService} from "../cours-service.service";
import {ProfesseurService} from "../professeur.service";
import {Professeur} from "../professeur";

@Component({
  selector: 'app-ajouter-cours',
  templateUrl: './ajouter-cours.page.html',
  styleUrls: ['./ajouter-cours.page.scss'],
})
export class AjouterCoursPage implements OnInit {
  form: FormGroup = new FormGroup({
    nom: new FormControl(''),
    nbEleves: new FormControl(''),
    nomProf: new FormControl(''),
  });

  professeurs: Professeur[] = [];

  constructor(private router: Router, private coursService: CoursServiceService, private professeurService: ProfesseurService) { }

  ngOnInit() {
    this.professeurService.getProfesseurs().then(() => {
      this.professeurs = this.professeurService.professeurs;
    });
  }

  async onSubmit() {
    await this.coursService.saveCours(this.form.value);
    await this.router.navigate(['/lister-cours']);
  }

}
