import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  };

  public error = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(){
    this.http.post('http://recipe-backend.test/api/signup', this.form).subscribe(data=>
      console.log(data),
      error=> this.handleError(error)
      );
  }

  handleError(error){
    this.error= error.error.errors;
  }
}
