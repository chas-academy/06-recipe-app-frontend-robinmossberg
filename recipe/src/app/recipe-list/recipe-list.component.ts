import { Component, OnInit } from '@angular/core';
import { RecipeDetailsComponent } from "../recipe-details/recipe-details.component.spec";
import { RecipeService } from "../recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  getRecipes(): void {
    this.recipes = this.RecipeService.getRecipes();
  }getRecipes

  constructor() { }

  ngOnInit() {
  }

}
