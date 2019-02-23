import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { TokenService } from '../token.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private databaseService: DatabaseService,
    private token: TokenService,
    private route: Router,
    private auth: AuthService
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
    this.route.navigateByUrl('/');
    this.token.handle(data.access_token);
    this.auth.changeStatus(true);
  }

  handleError(error){
    this.error= error.error.error;
  }

  ngOnInit() {
  }

}
