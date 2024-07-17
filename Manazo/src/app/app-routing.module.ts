import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './routes/home/home.component';
import { SearchComponent } from './routes/search/search.component';
import { ProductComponent } from './routes/product/product.component';
import {UserComponent} from './routes/user/user.component';
import { AdminComponent } from './routes/admin/admin.component';
import { CartComponent } from './routes/cart/cart.component';
import { FavoritesComponent } from './routes/favorites/favorites.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent},
  { path: 'product', component: ProductComponent},
  { path: 'user', component: UserComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'cart', component: CartComponent},
  { path: 'favorites', component: FavoritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
