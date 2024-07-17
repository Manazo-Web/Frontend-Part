import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { FavoritesComponent } from './favorites/favorites.component';



@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    ProductComponent,
    CartComponent,
    UserComponent,
    AdminComponent,
    FavoritesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RoutesModule { }
