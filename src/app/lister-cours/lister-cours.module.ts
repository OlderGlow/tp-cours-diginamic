import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListerCoursPageRoutingModule } from './lister-cours-routing.module';

import { ListerCoursPage } from './lister-cours.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListerCoursPageRoutingModule
  ],
  declarations: [ListerCoursPage]
})
export class ListerCoursPageModule {}
