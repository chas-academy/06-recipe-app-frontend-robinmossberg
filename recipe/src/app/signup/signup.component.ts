import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";

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

  constructor(
    private databaseService: DatabaseService,
    private route: Router
    ) { }

  ngOnInit() {
  }

  onSubmit(){
  this.databaseService.signup(this.form).subscribe(
      data=> this.sendToLogin(),
      error=> this.handleError(error)
      );
  }

  sendToLogin(){
    this.route.navigateByUrl('/login')
  }
  handleError(error){
    this.error= error.error.errors;
  }
}
