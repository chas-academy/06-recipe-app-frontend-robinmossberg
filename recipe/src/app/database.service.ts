import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  baseUrl = 'http://recipe-backend.test/api'

  constructor(private http: HttpClient) { }

  signup(data){

    return this.http.post(`${this.baseUrl}/signup`, data)
  }
  login(data){
    return this.http.post(`${this.baseUrl}/login`, data)

  }
}
