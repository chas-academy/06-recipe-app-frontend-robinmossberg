import { Component, OnInit } from '@angular/core';
// import { RecipeDetailsComponent } from "../recipe-details/recipe-details.component.spec";
import { RecipeService } from "../recipe.service";
import { Recipe } from '../recipe';
import { YummlyService } from "../yummly.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];
  recipePictures = [];
  recipeName = [];
  recipeThumbNail = [];
  
  constructor(private recipeService: RecipeService,
    private yummlyservice: YummlyService) { 

  }
  getRecipes(): void {
    this.yummlyservice.getYummlyRecipes('onion soup').subscribe(data =>{
      data.matches.forEach(element => {
        // this.recipePictures.push(element.imageUrlsBySize[90])
        // this.recipeName.push(element.recipeName)
        this.recipeThumbNail.push(element)
        console.log(element);
      });
    });
  }
  


  ngOnInit() {
  }

}
