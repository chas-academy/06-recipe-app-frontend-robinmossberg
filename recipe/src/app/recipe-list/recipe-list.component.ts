import { Component, OnInit, NgModule, Input } from "@angular/core";
import { NgForm } from "@angular/forms";

import { RecipeService } from "../recipe.service";
import { YummlyService } from "../yummly.service";
import { Subscription } from "rxjs";
import { FavoritesService } from "../favorites.service";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.scss"]
})
export class RecipeListComponent implements OnInit {



  search; 
  specials = [];
  message: string;
  recipes = [];
  yummly: Subscription;


  constructor(
    private recipeService: RecipeService,
    private yummlyService: YummlyService,
    private favoriteService: FavoritesService
  ) {}
  

  onSubmit(searchForm: NgForm) {
    this.search = searchForm.value;
    for (var key in this.search) {
      if (this.search[key] === true) {
        this.specials.push(key);
      }
    }
    
    this.getRecipes(searchForm.value.search);
  }

  getRecipes(search) {
    console.log(this.specials)
    this.yummlyService.storeSpecials(this.specials);
    this.specials = [];
    if(!search){
      console.log('You need to search stuff, Big Nose!')
      return;
    }
    this.recipes = []
    this.yummly = this.yummlyService
      .getYummlyRecipes(search)
      .subscribe(data => {
        data.matches.forEach(element => {
          this.recipes.push(element);
        });
        this.yummlyService.resetSpecialCourse();
        console.log(this.recipes)
      });
  }

  showRecipeDetails(e) {
    this.recipeService.changeMessage(e);
  }

  sendToFavs(save){
    this.favoriteService.saveToFavorites(save);
  }

  ngOnInit() {
    this.recipeService.currentMessage.subscribe(
      message => (this.message = message)
    );
  }
}
