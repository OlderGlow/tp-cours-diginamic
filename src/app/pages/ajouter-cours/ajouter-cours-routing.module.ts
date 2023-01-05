import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterCoursPage } from './ajouter-cours.page';
import {AuthGuard} from "../../guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: AjouterCoursPage,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterCoursPageRoutingModule {}
