import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  public form = {
    email: null,
    password: null
  }

  public error = null;

  onSubmit(){
    this.http.post('http://recipe-backend.test/api/login', this.form).subscribe(data=>
      console.log(data),
      error=> this.handleError(error)
      );
  }

  handleError(error){
    this.error= error.error.error;
  }

  ngOnInit() {
  }

}
