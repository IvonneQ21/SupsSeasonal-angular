
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

  constructor(private ingredientSearchService: IngredientSearchService) { }

  ngOnInit() {
    this.months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  }

  onSubmit(query): void {
    // console.log(query.queryMonth)
    this.ingredientSearchService.setMonth(query.queryMonth);
    // this.ingredientsSearch.search()
    // .subscribe(
    //   (results: SearchResult[]) => {
    //     this.ingredientsSearch.setIngredients(results);
    //   },
    //   (err: any) => {
    //     console.log(err);
    //   }
    // );
  }
}





// import { Component, OnInit } from '@angular/core';
// import { IngredientSearchService} from '../services/ingredients-search';
// // import service
// // import {SomeService } from '';
// @Component({
//   selector: 'app-months-dropdown',
//   templateUrl: './months-dropdown.component.html',
//   styleUrls: ['./months-dropdown.component.css']
// })
// export class MonthsDropdownComponent implements OnInit {
//  months: string[];
//
//  constructor(private ingredientsSearch: IngredientSearchService) { }
//
//  ngOnInit() {
//    this.months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
//  }
//
//   onSubmit(queryMonth: any): void {
//   this.ingredientsSearch.setMonth({
//     month: queryMonth.queryMonth
//   });
//
//   this.ingredientsSearch.search()
//   .subscribe(
//     (results: SearchResult[]) => {
//       this.ingredientsSearch.setIngredients(results);
//     },
//     (err: any) => {
//       console.log(err);
//     }
//   );
// }
