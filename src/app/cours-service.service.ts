import { Injectable } from '@angular/core';
import {Cours} from "./cours";
import {Preferences} from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class CoursServiceService {
  private COURS_STORAGE = 'course';

  public cours: Cours[] = [];

  constructor() {
    this.loadSaved().then(() => {
      console.log('Données chargées');
    });
  }

  public async loadSaved() {
    const cours = await Preferences.get({ key: this.COURS_STORAGE });
    if (typeof cours.value === "string") {
      this.cours = JSON.parse(cours.value) || [];
    }
  }

  public async deleteCours(cours: Cours, position: any){
    this.cours.splice(position, 1);

    await Preferences.set({
      key: this.COURS_STORAGE,
      value: JSON.stringify(this.cours)
    });
  }

  public async saveCours(cours: Cours){
    this.cours.push(cours);

    await Preferences.set({
      key: this.COURS_STORAGE,
      value: JSON.stringify(this.cours)
    });
  }

  // @ts-ignore
  public async searchCours(searchTerm: string){
    const coursList : Cours[] = [];
    for(const cours of this.cours){
      if(searchTerm === cours.nom){
        coursList.push(cours);
      }
      if(searchTerm === cours.nomProf){
        coursList.push(cours);
      }
    }
    if(coursList){
      return coursList;
    }
}}
