import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  recipe: Recipe = {
    id: 1,
    name: 'machosallad',
    ingredients: ['onion', 'letteuce', 'tomato'],
    instruction: 'smash and bash stuff together',

  }

  constructor() { }

  ngOnInit() {
  }

}
