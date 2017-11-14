import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ChatPageComponent } from './chat-page/chat-page.component';

const routes: Routes = [
  { path: 'chat-page', component: ChatPageComponent },
  { path: 'login-form', component: LoginFormComponent },
  { path: 'dashboard', component: DashboardComponent }


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
