import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { FavoritesComponent } from "./favorites/favorites.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from './signup/signup.component';
import { BeforeLoginService } from './before-login.service';
import { AfterLoginService } from './after-login.service';



const routes: Routes = [
  { path: '', component: RecipeListComponent},
  { path: 'recipe-details', component: RecipeDetailsComponent },
  { path: 'recipe-details/:id', component: RecipeDetailsComponent },
  { path: 'favorites', component: FavoritesComponent, canActivate: [AfterLoginService] },
  { path: 'login', component: LoginComponent , canActivate: [BeforeLoginService]},
  { path: 'signup', component: SignupComponent, canActivate: [BeforeLoginService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
