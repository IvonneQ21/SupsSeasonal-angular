
import { Component, OnInit } from '@angular/core';
import { IngredientSearchService } from '../services/ingredients-search';
// import { SearchResult } from '../imgredientresult.model';

@Component({
  selector: 'app-months-dropdown',
  // providers: [IngredientSearchService],
  templateUrl: './months-dropdown.component.html',
  styleUrls: ['./months-dropdown.component.css']
})
export class MonthsDropdownComponent implements OnInit {
  months: string[];
  isOpen: string;
  isDisabled: string;

  constructor(private ingredientSearchService: IngredientSearchService) { }

  ngOnInit() {
    this.months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  }

  onSubmit(query): void {
    this.ingredientSearchService.setMonth(query.queryMonth);
  }
}
