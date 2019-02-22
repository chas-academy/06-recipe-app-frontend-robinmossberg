import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";


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
  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
  }

  onSubmit(){
  this.databaseService.signup(this.form).subscribe(data=>
      console.log(data),
      error=> this.handleError(error)
      );
  }

  handleError(error){
    this.error= error.error.errors;
  }
}
