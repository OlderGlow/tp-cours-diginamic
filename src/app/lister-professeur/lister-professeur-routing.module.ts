import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListerProfesseurPage } from './lister-professeur.page';
import {AuthGuard} from "../auth.guard";

const routes: Routes = [
  {
    path: '',
    component: ListerProfesseurPage,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListerProfesseurPageRoutingModule {}
