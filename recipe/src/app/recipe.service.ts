import { Injectable } from '@angular/core';
import { recipes } from "./recipe-mock";
import { Recipe } from "./recipe";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  getRecipes(): Recipe []{
    return recipes;
  }


  constructor() { }
}
