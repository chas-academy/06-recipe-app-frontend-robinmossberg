import { Component, OnInit } from '@angular/core';
import { RecipeListComponent } from "../recipe-list/recipe-list.component";
import { RecipeService } from "../recipe.service";



@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  message: string;

  constructor(
      private recipeListComponent: RecipeListComponent,
      private recipeService: RecipeService
      ) { }
  

  ngOnInit() {
    this.recipeService.currentMessage.subscribe(message=> this.message = message)

  }
}
