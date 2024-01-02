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
RegClick() {
    const url = 'тут будет ссылка';

    const data = {
        RegLogin: this.RegLogin,
        RegEmail: this.RegEmail,
        RegName: this.RegName,
        RegNumber: this.RegNumber,
        RegPassword: this.RegPassword,
        RegSurname: this.RegSurname
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(responseData => {
        // Display the response data in the console
        console.log(responseData);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

  sendSearchString() {
    this.searchService.updateSearchString(this.searchString);
    this.router.navigate(['search']);
  }
}
