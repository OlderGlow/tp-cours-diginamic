import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {CoursServiceService} from "../cours-service.service";

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

  constructor(private router: Router, private coursService: CoursServiceService) { }

  ngOnInit() {
  }

  async onSubmit() {
    await this.coursService.saveCours(this.form.value);
    await this.router.navigate(['/lister-cours']);
  }

}
