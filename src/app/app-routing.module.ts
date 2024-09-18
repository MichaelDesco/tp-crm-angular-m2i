import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // ** Routes de la page d'accueil **
  // Redirection vers la page de connexion par défaut
  { path: '', redirectTo: '/auth/sign-in', pathMatch: 'full' },

  // Routes pour les pages de connexion et de gestion de mot de passe
  {
    path: 'auth',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },

  // ** Routes principales **
  // Chargement différé des modules pour les commandes et les clients
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule),
  },
  {
    path: 'clients',
    loadChildren: () =>
      import('./clients/clients.module').then((m) => m.ClientsModule),
  },

  // ** Routes d'erreur **
  // Route wildcard pour les chemins non trouvés
  // Redirige vers le module de page non trouvée en lazy-loading
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
