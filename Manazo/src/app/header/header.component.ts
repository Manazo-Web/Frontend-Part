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

  RegCountry:string = '';
  RegCity:string = '';
  RegStreet:string = '';
  RegZipcode:string = '';
  
  RegCreditCard:string = '';

  userClick()
  {
    this.router.navigate(['user']);
  }
  cartClick(){
    this.router.navigate(['cart']);
  }
  favoritesClick(){
    this.router.navigate(['favorites']);
  }
  LogClick() {
    // Assuming this.LogLogin and this.LogPassword are your login and password values
    const login = this.LogLogin;
    const password = this.LogPassword;

    // Construct the URL with login and password as query parameters
    const url = `api/user?login=${login}&password=${password}`;

    // Make the fetch request with the GET method
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // Add any additional headers if required
        },
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('LogClick:', error));
}
RegClick() {
        const url = 'тут будет ссылка';

        const data = {
            RegLogin: this.RegLogin,
            RegEmail: this.RegEmail,
            RegName: this.RegName,
            RegNumber: this.RegNumber,
            RegPassword: this.RegPassword,
            RegSurname: this.RegSurname,
    
            RegCreditCard:this.RegCreditCard,
    
            RegCountry: this.RegCountry,
            RegCity:this.RegCity,
            RegStreet:this.RegStreet,
            RegZipcode:this.RegZipcode
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
