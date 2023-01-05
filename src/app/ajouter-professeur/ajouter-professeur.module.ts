import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterProfesseurPageRoutingModule } from './ajouter-professeur-routing.module';

import { AjouterProfesseurPage } from './ajouter-professeur.page';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AjouterProfesseurPageRoutingModule,
        ReactiveFormsModule,
      HttpClientModule
    ],
  declarations: [AjouterProfesseurPage]
})
export class AjouterProfesseurPageModule {}
