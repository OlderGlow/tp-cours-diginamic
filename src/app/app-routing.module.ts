import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ajouter-cours',
    loadChildren: () => import('./pages/ajouter-cours/ajouter-cours.module').then(m => m.AjouterCoursPageModule)
  },
  {
    path: 'lister-cours',
    loadChildren: () => import('./pages/lister-cours/lister-cours.module').then(m => m.ListerCoursPageModule)
  },
  {
    path: 'rechercher-cours',
    loadChildren: () => import('./pages/rechercher-cours/rechercher-cours.module').then(m => m.RechercherCoursPageModule)
  },
  {
    path: 'ajouter-professeur',
    loadChildren: () => import('./pages/ajouter-professeur/ajouter-professeur.module').then(m => m.AjouterProfesseurPageModule)
  },
  {
    path: 'lister-professeur',
    loadChildren: () => import('./pages/lister-professeur/lister-professeur.module').then(m => m.ListerProfesseurPageModule)
  },
  {
    path: 'rechercher-professeur',
    loadChildren: () => import('./pages/rechercher-professeur/rechercher-professeur.module').then(m => m.RechercherProfesseurPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
