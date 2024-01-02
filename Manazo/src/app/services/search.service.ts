import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }
  private searchStringSource = new BehaviorSubject<string>('');
  searchString$ = this.searchStringSource.asObservable();

  updateSearchString(searchString: string) {
    this.searchStringSource.next(searchString);
  }
}
