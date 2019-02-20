import { FavoritesService } from "./favorites.service";

export class FavoriteMaker {

    constructor(
        favoriteService: FavoritesService
    ){}

    create(event: {  
        userId: number;
        recipeId: string;
        recipeName: string; 
        recipeUrl: string; 
    }) {
        return { 
            userId: event.userId,
            recipeId: event.recipeId,
            recipeName: event.recipeName,
            recipeUrl: event.recipeUrl 
        };
      }

      initFavMkr(event){
          return new FavoriteMaker(event);
      }
}


