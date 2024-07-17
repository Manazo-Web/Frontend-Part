import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cards = [
    { title: 'Заголовок карточки', img: '/assets/icon-1.png', link: '#' },
    { title: 'Заголовок карточки', img: '/assets/icon-1.png', link: '#' },
    { title: 'Заголовок карточки', img: '/assets/icon-1.png', link: '#' },
    { title: 'Заголовок карточки', img: '/assets/icon-1.png', link: '#' },
    { title: 'Заголовок карточки', img: '/assets/icon-1.png', link: '#' },
    { title: 'Заголовок карточки', img: '/assets/icon-1.png', link: '#' },
    { title: 'Заголовок карточки', img: '/assets/icon-1.png', link: '#' },
    { title: 'Заголовок карточки', img: '/assets/icon-1.png', link: '#' }
  ];
}
