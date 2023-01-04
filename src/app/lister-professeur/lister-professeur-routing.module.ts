import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListerProfesseurPage } from './lister-professeur.page';

const routes: Routes = [
  {
    path: '',
    component: ListerProfesseurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListerProfesseurPageRoutingModule {}
