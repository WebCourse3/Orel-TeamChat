import { Directive, Input } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Directive({ selector: '[protected]' })

export class ProtectedDirective {
  constructor(private userService: UserService, private router: Router) {
    if(!userService.IsLoggedIn()){
      this.router.navigate(['login-form']);
    }
  }

}
