import { Routes } from '@angular/router';
import { Fruits } from './fruits/fruits';
import { Animals } from './animals/animals';

export const routes: Routes = [ { path: 'animals', component: Animals},
  { path: 'fruits', component: Fruits}
];
