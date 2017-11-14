import { BrowserModule } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserService } from './user.service';
import { ProtectedDirective } from './protected.directive';
import { HttpClientModule } from '@angular/common/http';
import { ServerAuthenticationService } from './server-authentication.service';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    FooterComponent,
    DashboardComponent,
    ProtectedDirective,
    ChatPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, ServerAuthenticationService, CookieService],
  bootstrap: [AppComponent]
})

export class AppModule {

}
