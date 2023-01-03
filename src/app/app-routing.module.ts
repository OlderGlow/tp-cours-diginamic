import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ajouter-cours',
    loadChildren: () => import('./ajouter-cours/ajouter-cours.module').then( m => m.AjouterCoursPageModule)
  },
  {
    path: 'lister-cours',
    loadChildren: () => import('./lister-cours/lister-cours.module').then( m => m.ListerCoursPageModule)
  },
  {
    path: 'rechercher-cours',
    loadChildren: () => import('./rechercher-cours/rechercher-cours.module').then( m => m.RechercherCoursPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
