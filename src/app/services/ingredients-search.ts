import {
  Injectable,
  Inject
} from '@angular/core';
import { Http, Response } from '@angular/http';
import { SearchResult } from '../ingredientresult.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class IngredientSearchService {
  results: SearchResult[];

  constructor (public http: Http) {
  }

  setMonth(queryMonth: string): Promise<SearchResult[]> {
    const url = `https://supseasonal.herokuapp.com/api/months/${queryMonth}`;
    return this.http.get(url)
      .toPromise()
      .then(result => result.json())
      .then(res => this.results = res);
  }
}
