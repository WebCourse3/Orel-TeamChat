import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { ServerAuthenticationService } from '../server-authentication.service';
import { AppModule } from '../app.module';
import { Globals } from '../globals';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [Globals]
})
export class LoginFormComponent implements OnInit {
  user: User = {
    name: '',
    password: ''
  };

  private globals: Globals;

  constructor(private router: Router, private userService: UserService, private serverAuth: ServerAuthenticationService) {
  }

  ngOnInit() {
  }

  loginUser(): void
  {
    this.userService.LogIn(this.user);
    this.serverAuth.Authenticate().subscribe(res=>{

      if (res === true) {

        //cookieService.set( 'username', this.user.name );
        globals.username = this.user.username;
        this.router.navigate(['chat-page']);

      } else {

        alert("Username or password is invalid");
        this.router.navigate(['login-form']);
      }
    })

  }

}
