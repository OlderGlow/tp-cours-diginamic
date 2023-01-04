import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterProfesseurPage } from './ajouter-professeur.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterProfesseurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterProfesseurPageRoutingModule {}
