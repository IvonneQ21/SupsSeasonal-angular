import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../imgredientresult.model';
import { IngredientSearchService } from '../services/ingredients-search';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css'],
})

export class IngredientsComponent implements OnInit {
  constructor(private ingredientSearchService: IngredientSearchService) {}

  ngOnInit() {}
}
