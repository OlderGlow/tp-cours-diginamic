import { Injectable } from '@angular/core';
import {Professeur} from "../models/professeur";
import {Preferences} from "@capacitor/preferences";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class ProfesseurService {

  professeurs: Professeur[] = [];

  public PROFESSEUR_STORAGE = 'professeurs';
  constructor(private api : ApiService) {
    this.getProfesseurs().then(() => {
      return;
    })
  }

  getProfesseurs() {
    return new Promise<void>((resolve, reject) => {
      this.api.getProf().subscribe((professeurs) => {
        this.professeurs = professeurs;
        resolve();
      })
    })
  }

  addProfesseur(professeur: Professeur) {
    this.professeurs.push(professeur);
    Preferences.set({
      key: this.PROFESSEUR_STORAGE,
      value: JSON.stringify(this.professeurs)
    });
    this.api.postProf(professeur);
  }

  async deleteProfesseur(professeur: Professeur) {
    const index = this.professeurs.indexOf(professeur);
    if (index > -1) {
      this.professeurs.splice(index, 1);
    }
    await Preferences.set({
      key: this.PROFESSEUR_STORAGE,
      value: JSON.stringify(this.professeurs)
    })
    this.api.deleteProf(professeur);
    }

    async searchProfesseur(searchTerm: string) {
      const professeurList: Professeur[] = [];
      for(const professeur of this.professeurs){
        if(searchTerm.toUpperCase() === professeur.nom.toUpperCase() || searchTerm.toUpperCase() === professeur.prenom.toUpperCase()){
          professeurList.push(professeur);
        }
      }
      if(professeurList){
        return professeurList;
      }
      return null;
    }

}
