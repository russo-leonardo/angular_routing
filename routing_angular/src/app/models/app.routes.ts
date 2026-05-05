import { Routes } from '@angular/router';
import { Gneric } from '../gneric/gneric';

export const routes: Routes = [ 
  { path: ':id', component: Gneric},
  {path: '**', redirectTo: '/gneric'}
];
