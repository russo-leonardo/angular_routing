import { Routes } from '@angular/router';
import { Fruits } from './fruits/fruits';
import { Animals } from './animals/animals';
import { Gneric } from './gneric/gneric';

export const routes: Routes = [ 
  { path: 'animals', component: Animals},
  { path: 'fruits', component: Fruits},
  {path: '', redirectTo: '/animals', pathMatch: 'full'},
  { path: 'generic/:id', component: Gneric}
];
