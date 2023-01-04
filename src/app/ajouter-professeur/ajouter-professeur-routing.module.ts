import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterProfesseurPage } from './ajouter-professeur.page';
import {AuthGuard} from "../auth.guard";

const routes: Routes = [
  {
    path: '',
    component: AjouterProfesseurPage,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterProfesseurPageRoutingModule {}
