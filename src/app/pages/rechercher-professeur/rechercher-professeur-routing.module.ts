import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechercherProfesseurPage } from './rechercher-professeur.page';
import {AuthGuard} from "../../guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: RechercherProfesseurPage,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RechercherProfesseurPageRoutingModule {}
