import { Injectable } from '@angular/core';
import {Professeur} from "./professeur";
import {Preferences} from "@capacitor/preferences";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class ProfesseurService {

  professeurs: Professeur[] = [];

  public PROFESSEUR_STORAGE = 'professeurs';
  constructor(private api : ApiService) {
    this.getProfesseurs();
  }

  getProfesseurs(){
    /*const professeurs = await Preferences.get({ key: this.PROFESSEUR_STORAGE });
    if (typeof professeurs.value === "string") {
      this.professeurs = JSON.parse(professeurs.value) || [];
    }*/
    this.api.getProf().subscribe(res => {
      this.professeurs = res || [];
    });
  }

  addProfesseur(professeur: Professeur) {
    /*this.professeurs.push(professeur);

    await Preferences.set({
      key: this.PROFESSEUR_STORAGE,
      value: JSON.stringify(this.professeurs)
    })*/

    this.api.postProf(professeur)
  }

  async deleteProfesseur(professeur: Professeur) {
    console.log(professeur.id)
    if(professeur.id > -1){
      this.professeurs.find((item, index) => {
        console.log(item)
        if(item.id === professeur.id) {
          this.professeurs.splice(index,1);
        }
      })
      }
      await Preferences.set({
        key: this.PROFESSEUR_STORAGE,
        value: JSON.stringify(this.professeurs)
      });

      await this.api.deleteProf(professeur);
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
