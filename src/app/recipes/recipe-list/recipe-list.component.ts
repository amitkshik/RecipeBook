import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('Dal Makhni', 'Delicious Indian recipe',
  // tslint:disable-next-line:max-line-length
  'https://cdn.awesomecuisine.com/wp-content/uploads/2007/10/dal_makhani.jpg')
];
  constructor() { }

  ngOnInit() {
  }

}
