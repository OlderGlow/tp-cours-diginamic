import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListerCoursPage } from './lister-cours.page';
import {AuthGuard} from "../auth.guard";

const routes: Routes = [
  {
    path: '',
    component: ListerCoursPage,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListerCoursPageRoutingModule {}
