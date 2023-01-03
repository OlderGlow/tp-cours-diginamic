import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterCoursPageRoutingModule } from './ajouter-cours-routing.module';

import { AjouterCoursPage } from './ajouter-cours.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AjouterCoursPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [AjouterCoursPage]
})
export class AjouterCoursPageModule {}
