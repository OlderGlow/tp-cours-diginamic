import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechercherCoursPage } from './rechercher-cours.page';
import {AuthGuard} from "../../guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: RechercherCoursPage,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RechercherCoursPageRoutingModule {}
