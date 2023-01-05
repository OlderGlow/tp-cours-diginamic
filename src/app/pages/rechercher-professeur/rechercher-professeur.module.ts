import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechercherProfesseurPageRoutingModule } from './rechercher-professeur-routing.module';

import { RechercherProfesseurPage } from './rechercher-professeur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechercherProfesseurPageRoutingModule
  ],
  declarations: [RechercherProfesseurPage]
})
export class RechercherProfesseurPageModule {}
