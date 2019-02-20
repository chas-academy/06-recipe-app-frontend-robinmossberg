import { Component, OnInit } from '@angular/core';
import { RecipeListComponent } from "../recipe-list/recipe-list.component";
import { RecipeService } from "../recipe.service";
import { HttpClient } from "@angular/common/http";



@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  message: string;

  constructor(
      private recipeListComponent: RecipeListComponent,
      private recipeService: RecipeService,
      private http: HttpClient
      ) {}
    

    recipe=<any>[];
    searchString: string;
    q: string;
    apiId = '904755f8';
    apiKey = '88591af75ba66b77a07975586e3f64db';

  ngOnInit() {
    this.recipeService.currentMessage.subscribe(message=> this.message = message);
    this.getRecipe(this.message);
    // console.log(this.special)
  } 

  getRecipe(e) {
    this.getYummlyRecipe(e).subscribe(data => {
      this.recipe = data;
      // console.log(this.recipe);
    });

    
  }
    getYummlyRecipe = (q: any) => {
      console.log(q)
      this.searchString = q.id;
      // console.log(this.searchString);
      return this.http.get(`http://api.yummly.com/v1/api/recipe/${this.searchString}?_app_id=${this.apiId}&_app_key=${this.apiKey}`
      )
    

  }
}

