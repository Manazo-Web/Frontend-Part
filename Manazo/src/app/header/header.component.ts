import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  LogLogin:string = '';
  LogPassword:string = '';

  RegName:string = '';
  RegSurname:string = '';
  RegNumber:number = 0;
  RegEmail:string = '';
  RegLogin:string = '';
  RegPassword:string = '';

  LogClick(){
    console.log(this.LogLogin + " " + this.LogPassword);
  }
  RegClick(){
    //тут делай шо хош
    console.log(this.RegLogin + "\n" +this.RegEmail + "\n" +this.RegName + "\n" +this.RegNumber + "\n" + this.RegPassword + "\n" + this.RegSurname);
  }
  
}
