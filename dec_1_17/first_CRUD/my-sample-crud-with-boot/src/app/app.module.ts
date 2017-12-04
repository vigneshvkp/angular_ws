import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {MainpageComponent} from './mainpage/mainpage.component';
import {UserServiceService} from './services/user-service.service';
import {ProjectService} from './mainpage/project/project.service';
import {LoginComponent} from './login/login.component';
import {AuthGuardGuard} from './guards/auth-guard.guard';
import {HttpModule} from '@angular/http';
import {UserRegistrationComponent} from './user-registration/user-registration.component';
import { ListuserComponent } from './mainpage/listuser/listuser.component';
import { ProjectComponent } from './mainpage/project/project.component';
import { Project} from './mainpage/project/pjt';

const appRoutes: Routes = [
    {
      path: '',         // this is to show login on startup
      component: LoginComponent
    },
    {
      path: 'userRegistration',
      component: UserRegistrationComponent
    },
    {
      path: 'mainpage',
      canActivate: [AuthGuardGuard],
      component: MainpageComponent
    }
  ]
;


@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    LoginComponent,
    UserRegistrationComponent,
    ListuserComponent,
    ProjectComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserServiceService, AuthGuardGuard, ProjectService, Project],
  bootstrap: [AppComponent]
})
export class AppModule {
}
