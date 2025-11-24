import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./app.component').then(c => c.AppComponent) },
  // Add more routes as needed for other pages
];