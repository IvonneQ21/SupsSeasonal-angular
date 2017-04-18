import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  ingredients: string[];

  constructor() {
      this.ingredients = ['arugula', 'beets', 'broccoli', 'brussels sprouts'];
   }

  ngOnInit() {
  }

}
