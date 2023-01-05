import { Injectable } from '@angular/core';
import {Professeur} from "./professeur";
import {Preferences} from "@capacitor/preferences";
import {Cours} from "./cours";

@Injectable({
  providedIn: 'root'
})
export class ProfesseurService {

  professeurs: Professeur[] = [];
  public PROFESSEUR_STORAGE = 'professeurs';
  constructor() {
    this.getProfesseurs().then(() => {
      console.log('Données chargées');
    });
  }

  async getProfesseurs(){
    const professeurs = await Preferences.get({ key: this.PROFESSEUR_STORAGE });
    if (typeof professeurs.value === "string") {
      this.professeurs = JSON.parse(professeurs.value) || [];
    }
  }

  async addProfesseur(professeur: Professeur) {
    this.professeurs.push(professeur);

    await Preferences.set({
      key: this.PROFESSEUR_STORAGE,
      value: JSON.stringify(this.professeurs)
    })
  }

  async deleteProfesseur(professeur: Professeur) {
    if(professeur.id > -1){
      this.professeurs.find((item, index) => {
        if(item.id === professeur.id) {
          this.professeurs.splice(index,1);
        }
      })
      }
    console.log(this.professeurs)
      await Preferences.set({
        key: this.PROFESSEUR_STORAGE,
        value: JSON.stringify(this.professeurs)
      });
    }

    async searchProfesseur(searchTerm: string) {
      const professeurList: Professeur[] = [];
      for(const professeur of this.professeurs){
        if(searchTerm === professeur.nom){
          professeurList.push(professeur);
        }
        if(searchTerm === professeur.prenom){
          professeurList.push(professeur);
        }
      }
      if(professeurList){
        return professeurList;
      }
      return null;
    }

}
