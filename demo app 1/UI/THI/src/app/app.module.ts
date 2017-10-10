import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HeaderComponent} from './header/header.component';
import {MainpageComponent} from './mainpage/mainpage.component';
// to route between components
import {RouterModule, Routes} from '@angular/router';
import { FormsModule} from '@angular/forms';
// to create any service that access the json and provide to us
import { DemoserviceService} from './services/demoservice.service';
import { HttpModule} from '@angular/http';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { UserService} from './services/user.service';
import { AuthGuardGuard} from './auth-guard.guard';
const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'mainpage',
    canActivate : [AuthGuardGuard],
    component: MainpageComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    MainpageComponent,
    AboutusComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes), // set to route between screens
    BrowserModule,
    FormsModule,   // to specify the component value in html through ngmodel..value change in obj it change in html
    HttpModule
  ],
  providers: [DemoserviceService, UserService, AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
