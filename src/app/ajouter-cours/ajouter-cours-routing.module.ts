import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterCoursPage } from './ajouter-cours.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterCoursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterCoursPageRoutingModule {}
