import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';

const authUrl: string = 'http://localhost:3000/login';

@Injectable()
export class ServerAuthenticationService {

  constructor(  private http: HttpClient, private userService: UserService) { }
  Authenticate(): Observable<boolean> {

   let params = new HttpParams().set('username', this.userService.user.name)
     .set('password', this.userService.user.password);

   return this.http.get<boolean>(authUrl, {params: params});
  }
}
