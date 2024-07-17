import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  hovered = false;
  
 star1: any;
 star2: any;
 star3: any;
 star4: any;
 star5: any;

  constructor(private renderer: Renderer2) {}
  
  ngAfterViewInit() {
    this.star1 = document.getElementById('star1');
    this.star2 = document.getElementById('star2');
    this.star3 = document.getElementById('star3');
    this.star4 = document.getElementById('star4');
    this.star5 = document.getElementById('star5');
  }
  onMouseEnter1() {
    this.renderer.removeClass(this.star1,'bi-star');
    this.renderer.addClass(this.star1,'bi-star-fill');
  }
  onMouseEnter2() {
    this.renderer.removeClass(this.star1,'bi-star');
    this.renderer.addClass(this.star1,'bi-star-fill');
    this.renderer.removeClass(this.star2,'bi-star');
    this.renderer.addClass(this.star2,'bi-star-fill');
  }
  onMouseEnter3() {
    this.renderer.removeClass(this.star1,'bi-star');
    this.renderer.addClass(this.star1,'bi-star-fill');
    this.renderer.removeClass(this.star2,'bi-star');
    this.renderer.addClass(this.star2,'bi-star-fill');
    this.renderer.removeClass(this.star3,'bi-star');
    this.renderer.addClass(this.star3,'bi-star-fill');
  }
  onMouseEnter4() {
    this.renderer.removeClass(this.star1,'bi-star');
    this.renderer.addClass(this.star1,'bi-star-fill');
    this.renderer.removeClass(this.star2,'bi-star');
    this.renderer.addClass(this.star2,'bi-star-fill');
    this.renderer.removeClass(this.star3,'bi-star');
    this.renderer.addClass(this.star3,'bi-star-fill');
    this.renderer.removeClass(this.star4,'bi-star');
    this.renderer.addClass(this.star4,'bi-star-fill');
  }
  onMouseEnter5() {
    this.renderer.removeClass(this.star1,'bi-star');
    this.renderer.addClass(this.star1,'bi-star-fill');
    this.renderer.removeClass(this.star2,'bi-star');
    this.renderer.addClass(this.star2,'bi-star-fill');
    this.renderer.removeClass(this.star3,'bi-star');
    this.renderer.addClass(this.star3,'bi-star-fill');
    this.renderer.removeClass(this.star4,'bi-star');
    this.renderer.addClass(this.star4,'bi-star-fill');
    this.renderer.removeClass(this.star5,'bi-star');
    this.renderer.addClass(this.star5,'bi-star-fill');
  }
  onMouseLeave1() {
    this.renderer.removeClass(this.star1,'bi-star-fill');
    this.renderer.addClass(this.star1,'bi-star');
  }
  onMouseLeave2() {
    this.renderer.removeClass(this.star1,'bi-star-fill');
    this.renderer.addClass(this.star1,'bi-star');
    this.renderer.removeClass(this.star2,'bi-star-fill');
    this.renderer.addClass(this.star2,'bi-star');
  }
  onMouseLeave3() {
    this.renderer.removeClass(this.star1,'bi-star-fill');
    this.renderer.addClass(this.star1,'bi-star');
    this.renderer.removeClass(this.star2,'bi-star-fill');
    this.renderer.addClass(this.star2,'bi-star');
    this.renderer.removeClass(this.star3,'bi-star-fill');
    this.renderer.addClass(this.star3,'bi-star');
  }
  onMouseLeave4() {
    this.renderer.removeClass(this.star1,'bi-star-fill');
    this.renderer.addClass(this.star1,'bi-star');
    this.renderer.removeClass(this.star2,'bi-star-fill');
    this.renderer.addClass(this.star2,'bi-star');
    this.renderer.removeClass(this.star3,'bi-star-fill');
    this.renderer.addClass(this.star3,'bi-star');
    this.renderer.removeClass(this.star4,'bi-star-fill');
    this.renderer.addClass(this.star4,'bi-star');
  }
  onMouseLeave5() {
    this.renderer.removeClass(this.star1,'bi-star-fill');
    this.renderer.addClass(this.star1,'bi-star');
    this.renderer.removeClass(this.star2,'bi-star-fill');
    this.renderer.addClass(this.star2,'bi-star');
    this.renderer.removeClass(this.star3,'bi-star-fill');
    this.renderer.addClass(this.star3,'bi-star');
    this.renderer.removeClass(this.star4,'bi-star-fill');
    this.renderer.addClass(this.star4,'bi-star');
    this.renderer.removeClass(this.star5,'bi-star-fill');
    this.renderer.addClass(this.star5,'bi-star');
  }

}
