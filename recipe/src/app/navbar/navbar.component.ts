import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from "@angular/router";
import { TokenService } from '../token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public loggedIn: Boolean;

  constructor(
    private auth: AuthService,
    private route: Router,
    private token: TokenService
    ) { }

  ngOnInit() {
    this.auth.authStatus.subscribe(value => this.loggedIn = value);
  }

  logOut(event: MouseEvent){
    event.preventDefault();
    this.token.remove();
    this.auth.changeStatus(true);
    this.route.navigateByUrl('/login');
  }

}
