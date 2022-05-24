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
    path: 'about',
    loadChildren: () => import('./paginas/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./paginas/products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./paginas/services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./paginas/contacts/contacts.module').then( m => m.ContactsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
