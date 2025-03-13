import { Routes } from '@angular/router';
import {ProductListComponent} from './features/product-list/product-list.component';
import {ProductDetailsComponent} from './features/product-details/product-details.component';
import {NotFoundComponent} from './core/components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path:'**', component: NotFoundComponent }
];
