import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  savedFavorites = [];

  saveToFavorites(save){
    debugger;
    this.savedFavorites.push(save);
    console.log(this.savedFavorites);
  }

  constructor() { }
}
