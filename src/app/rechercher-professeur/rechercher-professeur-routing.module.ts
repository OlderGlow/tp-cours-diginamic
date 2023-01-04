import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechercherProfesseurPage } from './rechercher-professeur.page';

const routes: Routes = [
  {
    path: '',
    component: RechercherProfesseurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RechercherProfesseurPageRoutingModule {}
