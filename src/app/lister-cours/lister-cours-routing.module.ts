import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListerCoursPage } from './lister-cours.page';

const routes: Routes = [
  {
    path: '',
    component: ListerCoursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListerCoursPageRoutingModule {}
