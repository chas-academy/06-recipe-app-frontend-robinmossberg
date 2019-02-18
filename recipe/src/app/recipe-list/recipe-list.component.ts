import { Component, OnInit, NgModule, Input } from "@angular/core";
import { NgForm } from "@angular/forms";

import { RecipeService } from "../recipe.service";
import { YummlyService } from "../yummly.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.scss"]
})
export class RecipeListComponent implements OnInit {

  
  apiSearch;
  search;
  specials = [];
  message: string;
  recipes = [];
  yummly: Subscription;


  constructor(
    private recipeService: RecipeService,
    private yummlyService: YummlyService
  ) {}
  

  onSubmit(searchForm: NgForm) {
    this.search = searchForm.value;
    for (var key in this.search) {
      if (this.search[key] === true) {
        this.specials.push(key);
      }
    }
    console.log(this.specials);
    this.apiSearch = searchForm.value.search + this.specials;
    this.getRecipes(this.apiSearch);
  }

  getRecipes(search) {
    this.yummly = this.yummlyService
      .getYummlyRecipes(search)
      .subscribe(data => {
        data.matches.forEach(element => {
          this.recipes.push(element);
        });
      });
    console.log(this.recipes);
  }

  showRecipeDetails(e) {
    this.recipeService.changeMessage(e);
  }

  ngOnInit() {
    this.recipeService.currentMessage.subscribe(
      message => (this.message = message)
    );
  }
}
