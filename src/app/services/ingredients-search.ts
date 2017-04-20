import {
  Injectable,
  Inject
} from '@angular/core';
import { Http, Response } from '@angular/http';
import { SearchResult } from '../imgredientresult.model';

import 'rxjs/add/operator/toPromise';


// export const SS_API_URL = 'http://supseasonal.herokuapp.com/api/months/';

@Injectable()
export class IngredientSearchService {
  results: SearchResult[];

  // currentMonth: string;
  // static instance: IngredientSearchService;

  // currentSelectedMonth: any;
  // ingredients: Array<SearchResult>;


  constructor (private http: Http) {
    // return IngredientSearchService.instance = IngredientSearchService.instance || this;
  }
  setMonth(queryMonth: string): Promise<SearchResult[]> {
    // console.log('hi')
    // console.log("the month is being set");
    // this.currentSelectedMonth = queryMonth.month;
    const url = `http://supseasonal.herokuapp.com/api/months/${queryMonth}`
    return this.http.get(url)
      .toPromise()
      .then(result => result.json())
      .then(res => this.results = res)

      // .then(res => console.log(res))
  }
}
  // getMonth() {
  //   // console.log("are you getting the month");
  //   return this.currentSelectedMonth;
  // }
  //
  // setIngredients(results) {
  //   this.ingredients = results;
  // }
  //
  // getIngredients() {
  //   return this.ingredients;
  // }
  // search( ): Observable<SearchResult[]> {
  //   console.log(this.currentSelectedMonth);
  //   const queryURL = `http://supseasonal.herokuapp.com/api/months/${this.currentSelectedMonth}`;
  //   return this.http.get(queryURL)
  //   .map((response: Response) => {
  //
  //     return (<any>response.json()).map(item => {
  //       // console.log("I'm here");
  //       return new SearchResult({
  //         food_name: item.food_name
  //       });
  //     });
  //   });
  // }
// }
