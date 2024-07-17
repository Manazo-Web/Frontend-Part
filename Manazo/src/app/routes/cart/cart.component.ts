import { Component } from '@angular/core';

interface CartItem {
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {
  cartItems: CartItem[] = [
    { name: 'Товар 1', description: 'Описание товара 1', price: 1000, quantity: 1, image: 'https://via.placeholder.com/150' },
    { name: 'Товар 2', description: 'Описание товара 2', price: 2000, quantity: 2, image: 'https://via.placeholder.com/150' }
  ];

  updateQuantity(index: number, quantity: number) {
    if (quantity > 0) {
      this.cartItems[index].quantity = quantity;
    }
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  checkout() {
    // Здесь вы можете добавить логику для оформления заказа
    alert('Оформление заказа пока не реализовано.');
  }
}
