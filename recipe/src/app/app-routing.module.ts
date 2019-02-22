import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { FavoritesComponent } from "./favorites/favorites.component";
import { LoginComponent } from "./login/login.component";
import { RequestResetComponent } from './password/request-reset/request-reset.component';
import { ResponseResetComponent } from './password/response-reset/response-reset.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  { path: '', component: RecipeListComponent},
  { path: 'recipe-details', component: RecipeDetailsComponent },
  { path: 'recipe-details/:id', component: RecipeDetailsComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'request-reset-password', component: RequestResetComponent },
  { path: 'respons', component: ResponseResetComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
