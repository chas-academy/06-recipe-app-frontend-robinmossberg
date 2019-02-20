import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { FavoritesComponent } from "./favorites/favorites.component";

const routes: Routes = [
  { path: '', component: RecipeListComponent},
  { path: 'recipe-details', component: RecipeDetailsComponent },
  { path: 'recipe-details/:id', component: RecipeDetailsComponent },
  { path: 'favorites', component: FavoritesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
