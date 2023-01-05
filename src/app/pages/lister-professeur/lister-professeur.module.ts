import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListerProfesseurPageRoutingModule } from './lister-professeur-routing.module';

import { ListerProfesseurPage } from './lister-professeur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListerProfesseurPageRoutingModule
  ],
  declarations: [ListerProfesseurPage]
})
export class ListerProfesseurPageModule {}
