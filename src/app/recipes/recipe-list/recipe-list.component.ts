import { Component } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://unsplash.com/photos/kcA-c3f_3FE'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.foodiesfeed.com/free-food-photo/pouring-honey-on-pancakes/')
  ];

}
