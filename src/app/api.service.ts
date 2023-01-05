import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Photos} from "./photos";
import {Observable} from "rxjs";
import {Professeur} from "./professeur";
import {Cours} from "./cours";

const url = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getPhoto(): Observable<Photos[]> {
    return this.http.get<Photos[]>(url+'/Photos');
  }

  getOnePhoto(photo: Photos): Observable<Photos[]>{
    return this.http.get<Photos[]>(url+'/Photos/'+(photo.id||0))
  }

  postPhoto(photo: Photos){
    return this.http.post<Photos>(url+'/Photos', photo);
  }

  putPhoto(photo: Photos): Observable<Photos>{
    return this.http.put<Photos>(url+'/Photos/'+(photo.id||0), photo);
  }

  deletePhoto(photo: Photos): Observable<Photos>{
    return this.http.delete<Photos>(url+'/Photos/'+(photo.id||0))
  }

  getProf(): Observable<Professeur[]> {
    return this.http.get<Professeur[]>(url+'/Professeurs');
  }

  getOneProf(professeur: Professeur): Observable<Professeur[]>{
    return this.http.get<Professeur[]>(url+'/Professeurs/'+(professeur.id||0))
  }

  postProf(professeur: Professeur){
    /*fetch(url+'/Professeurs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(professeur)
    }).then(res => res.json())
      .catch(err => console.error(err))*/
    return this.http.post<Professeur>(url+'/Professeurs', professeur);
  }

  putProf(professeur: Professeur): Observable<Professeur>{
    return this.http.put<Professeur>(url+'/Professeurs/'+(professeur.id||0), professeur);
  }

  deleteProf(professeur: Professeur): Observable<Professeur>{
    return this.http.delete<Professeur>(url+'/Professeurs/'+(professeur.id||0))
  }

  getCours(): Observable<Cours[]> {
    return this.http.get<Cours[]>(url+'/Cours');
  }

  getOneCours(cours: Cours): Observable<Cours[]>{
    return this.http.get<Cours[]>(url+'/Cours/'+(cours.id||0))
  }

  postCours(cours: Cours) : Observable<Cours>{
    return this.http.post<Cours>(url+'/Cours', cours);
  }

  putCours(cours: Cours): Observable<Cours>{
    return this.http.put<Cours>(url+'/Cours/'+(cours.id||0), cours);
  }

  deleteCours(cours: Cours): Observable<Cours>{
    return this.http.delete<Cours>(url+'/Cours/'+(cours.id||0))
  }
}
