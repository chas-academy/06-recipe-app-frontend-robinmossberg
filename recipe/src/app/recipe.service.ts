import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  private messageSource = new BehaviorSubject<any>("default-message");
  currentMessage = this.messageSource.asObservable();


  constructor() { }

  changeMessage(message: string){
    this.messageSource.next(message)
  }
}
