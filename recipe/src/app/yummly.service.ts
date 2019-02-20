import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { query } from '@angular/core/src/render3';
import { AppComponent } from "./app.component";

@Injectable({
  providedIn: 'root'
})
export class YummlyService{
  constructor(private http: HttpClient) { }

  // "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"

  // searchString: string;
  // q: string;
  // apiId = 'ed8ca186';
  // apiKey = 'a63f7715c338eba6b9a2da2e726e1471';
  // getYummlyRecipes = (q: string) => {
  //   q = encodeURIComponent(q.trim())
  //   return this.http.get<any>(`https://api.edamam.com/search?q=${q}&app_id=${this.apiId}&app_key=${this.apiKey}`
  //   )
  // } 
 
  // &allowedDiet=403^Paleo
  // &allowedDiet=387^Lacto-ovo+vegetarian
  // &allowedDiet=386^Vegan
  // &allowedDiet=389^Ovo+vegetarian
  // &allowedDiet=390^Pescetarian
  // &allowedDiet=408^Low+FODMAP
  // &allowedDiet=388^Lacto+vegetarian
  // &allowedDiet=406^Ketogenic
  // &q=lemon&taste-pref-appended=true
  
  specialsCourse = ['&allowedCourse[]=course^'];
  stringedSpecials;
  trimmedSpecials;


  storeSpecials(spc){
    spc.forEach(element => {
      this.specialsCourse.push(element);
    });
    this.stringedSpecials = this.specialsCourse.join('')
    console.log(this.stringedSpecials)
  
  }


  searchString: string;
  q: string;
  apiId = '904755f8';
  apiKey = '88591af75ba66b77a07975586e3f64db';
  getYummlyRecipes = (q: string) => {
   
    q = encodeURIComponent(q.trim())
    
    this.searchString = q + `&requirePictures=true${this.stringedSpecials}` ;
    this.searchString = this.searchString.replace(",","");
    
    console.log(this.searchString)
    return this.http.get<any>(`http://api.yummly.com/v1/api/recipes?_app_id=${this.apiId}&_app_key=${this.apiKey}&maxResult=100&start=10&q=${this.searchString}&taste-pref-appended=true`
    );
  } 
  
  
  resetSpecialCourse(){
    this.specialsCourse = ['&allowedCourse[]=course^'];

  }
}


