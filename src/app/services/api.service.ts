import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Photos} from "../models/photos";
import {Observable} from "rxjs";
import {Professeur} from "../models/professeur";
import {Cours} from "../models/cours";

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000';

  getPhoto(): Observable<Photos[]> {
    return this.http.get<Photos[]>(this.url+'/Photos');
  }

  getOnePhoto(id: number): Observable<Photos>{
    return this.http.get<Photos>(this.url+'/Photos/'+(id))
  }

  postPhoto(photo: Photos){
    return this.http.post<Photos>(this.url+'/Photos', photo);
  }

  putPhoto(photo: Photos): Observable<Photos>{
    return this.http.put<Photos>(this.url+'/Photos/'+(photo.id||0), photo);
  }

  deletePhoto(photo: Photos): Observable<Photos>{
    return this.http.delete<Photos>(this.url+'/Photos/'+(photo.id||0))
  }

  getProf(): Observable<Professeur[]> {
    return this.http.get<Professeur[]>(this.url+'/Professeurs');
  }

  getOneProf(professeur: Professeur): Observable<Professeur[]>{
    return this.http.get<Professeur[]>(this.url+'/Professeurs/'+(professeur.id||0))
  }

  postProf(data: Professeur){
    this.http.post<Professeur>(this.url+'/Professeurs', data).subscribe((data) => {
    });
  }

  putProf(professeur: Professeur): Observable<Professeur>{
    return this.http.put<Professeur>(this.url+'/Professeurs/'+(professeur.id||0), professeur);
  }

  deleteProf(professeur: Professeur){
    return this.http.delete<Professeur>(this.url+'/Professeurs/'+(professeur.id||0)).subscribe((data) => {
      return;
    })
  }

  getCours(): Observable<Cours[]> {
    return this.http.get<Cours[]>(this.url+'/Cours');
  }

  getOneCours(cours: Cours): Observable<Cours[]>{
    return this.http.get<Cours[]>(this.url+'/Cours/'+(cours.id||0))
  }

  postCours(cours: Cours){
    return this.http.post<Cours>(this.url+'/Cours', cours).subscribe((data) => {
      return;
    })
  }

  putCours(cours: Cours): Observable<Cours>{
    return this.http.put<Cours>(this.url+'/Cours/'+(cours.id||0), cours);
  }

  deleteCours(cours: Cours){
    return this.http.delete<Cours>(this.url+'/Cours/'+(cours.id||0)).subscribe((data) => {
      return;
    })
  }
}
