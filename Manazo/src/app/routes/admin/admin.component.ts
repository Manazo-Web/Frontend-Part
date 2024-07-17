import { Component } from '@angular/core';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  productName: string = '';
  productDescription: string = '';
  productPrice: number | null = null;
  productCategory: string = '';
  imagePreviews: string[] = [];

  categories: string[] = ['Электроника', 'Одежда', 'Книги', 'Игрушки', 'Продукты'];

  onFileChange(event: any) {
    const files = event.target.files;
    this.imagePreviews = [];
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreviews.push(e.target.result);
      }
      reader.readAsDataURL(files[i]);
    }
  }
}
