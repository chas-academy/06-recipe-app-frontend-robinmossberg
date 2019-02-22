import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private databaseService: DatabaseService) { }

  public form = {
    email: null,
    password: null
  }

  public error = null;

  onSubmit(){
    this.databaseService.login(this.form).subscribe(data=>
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
