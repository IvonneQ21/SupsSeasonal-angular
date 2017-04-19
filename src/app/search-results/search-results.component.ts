import { Component, OnInit, Input } from '@angular/core';
import { SearchResults } from './search-results.model';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  @Input() result: SearchResults;

  constructor() { }

  ngOnInit() {
  }

}
