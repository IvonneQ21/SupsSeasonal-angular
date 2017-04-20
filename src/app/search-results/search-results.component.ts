import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from '../imgredientresult.model';
import { MonthsDropdownComponent } from '../months-dropdown/months-dropdown.component';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
