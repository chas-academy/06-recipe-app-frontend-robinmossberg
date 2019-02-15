import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { query } from '@angular/core/src/render3';
import { AppComponent } from "./app.component";

@Injectable({
  providedIn: 'root'
})
export class YummlyService{
  constructor(private http: HttpClient) { }


  searchString: string;
  q: string;
  apiId = '904755f8';
  apiKey = '88591af75ba66b77a07975586e3f64db';
  getYummlyRecipes = (q: string) => {
    q = encodeURIComponent(q.trim())
    this.searchString = q + '&requirePictures=true';
    return this.http.get<any>(`http://api.yummly.com/v1/api/recipes?_app_id=${this.apiId}&_app_key=${this.apiKey}&q=${this.searchString}`
    )
  } 
}


