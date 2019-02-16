import { Component, OnInit, NgModule, Input } from '@angular/core';

import { RecipeService } from "../recipe.service";
import { YummlyService } from "../yummly.service";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  constructor(private recipeService: RecipeService,
    private yummlyService: YummlyService,
    ) {}


  message:string;
  recipes=[];
  yummly: Subscription;
  

  getRecipes(e) {
    this.yummly = this.yummlyService.getYummlyRecipes(e).subscribe(data => {
      data.matches.forEach(element => {
        this.recipes.push(element)
      });
    });
    // console.log(this.recipes)
    
  }
  
  showRecipeDetails(e){
  
    this.recipeService.changeMessage(e);
    
  }


  ngOnInit() {
    this.recipeService.currentMessage.subscribe(message=> this.message = message)
  }

}
