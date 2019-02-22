import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { TokenService } from '../token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private databaseService: DatabaseService,
    private token: TokenService,
    private route: Router
    ) { }

  public form = {
    email: null,
    password: null
  }

  public error = null;

  onSubmit(){
    this.databaseService.login(this.form).subscribe(
      data => this.handleResp(data),
      error=> this.handleError(error)
      );
  }

  handleResp(data){
    this.token.handle(data.access_token);
    this.route.navigateByUrl('/');
  }

  handleError(error){
    this.error= error.error.error;
  }

  ngOnInit() {
  }

}
