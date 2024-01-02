import { Component } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  receivedSearchString: string = '';

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.searchService.searchString$.subscribe(searchString => {
      this.receivedSearchString = searchString;
    });
  }
}
