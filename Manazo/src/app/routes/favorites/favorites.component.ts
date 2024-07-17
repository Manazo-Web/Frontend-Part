import { Component } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  favoriteItems: any[] = []; 

  constructor() {
    this.favoriteItems = [
      { name: 'Товар 1', image: 'https://via.placeholder.com/150', description: 'Описание товара 1', price: 100 },
      { name: 'Товар 2', image: 'https://via.placeholder.com/150', description: 'Описание товара 2', price: 200 }
    ];
  }

  removeFromFavorites(index: number) {
    this.favoriteItems.splice(index, 1);
  }
}