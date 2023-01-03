import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechercherCoursPage } from './rechercher-cours.page';

const routes: Routes = [
  {
    path: '',
    component: RechercherCoursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RechercherCoursPageRoutingModule {}
