import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../services/search.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router,private searchService: SearchService) {}

  searchString: string = '';

  LogLogin:string = '';
  LogPassword:string = '';

  RegName:string = '';
  RegSurname:string = '';
  RegNumber:string = '';
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


  sendSearchString() {
    this.searchService.updateSearchString(this.searchString);
    this.router.navigate(['search']);
  }
}
