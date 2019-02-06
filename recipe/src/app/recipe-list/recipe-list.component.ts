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
  
  constructor(private recipeService: RecipeService,
    private yummlyservice: YummlyService) { 

  }
  getRecipes(): void {
  }
  


  ngOnInit() {
    this.yummlyservice.getYummlyRecipes('onion soup').subscribe(data =>{
      data.matches.forEach(element => {
        console.log(element.imageUrlsBySize)
        this.recipePictures.push(element.imageUrlsBySize[90])
        
      });
      console.log(this.recipePictures)
    });

  }

}
