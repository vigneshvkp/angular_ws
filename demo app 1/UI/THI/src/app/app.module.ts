import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HeaderComponent} from './header/header.component';
import {MainpageComponent} from './mainpage/mainpage.component';
// to route between components
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
// to create any service that access the json and provide to us
import {DemoserviceService} from './services/demoservice.service';
import {HttpModule} from '@angular/http';
import {AboutusComponent} from './aboutus/aboutus.component';
import {FooterComponent} from './footer/footer.component';
import {UserService} from './services/user.service';
import {AuthGuardGuard} from './auth-guard.guard';
import {UserComponent} from './user/user.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {ProjectComponent} from './project/project.component';
import { ChildComponent } from './project/child/child.component';
import { PjtService} from './project/services/pjt.service';
import { Project} from './project/pjt';

const appRoutes: Routes = [
    {
      path: '',
      component: LoginComponent
    },
    {
      path: 'users/:name',
      component: UserComponent
    },
    {
      path: 'users',
      pathMatch: 'prefix',
      children: [
        {
          path: ':name',
          children: [
            {
              path: ':id',
              component: UserComponent
            }
          ]
        }
      ]
    },
    {
      path: 'mainpage',
      canActivate:
        [AuthGuardGuard],
      component:
      MainpageComponent
    }
    ,
    {
      path: 'aboutus',
      component:
      AboutusComponent
    }
    ,
    {
      path: 'project',
      component: ProjectComponent
    },
    {
      path: '**',
      component:
      NotfoundComponent
    }

  ]
;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    MainpageComponent,
    AboutusComponent,
    FooterComponent,
    UserComponent,
    NotfoundComponent,
    ProjectComponent,
    ChildComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes), // set to route between screens
    BrowserModule,
    FormsModule,   // to specify the component value in html through ngmodel..value change in obj it change in html
    HttpModule
  ],
  providers: [DemoserviceService, UserService, AuthGuardGuard, PjtService, Project],
  bootstrap: [AppComponent]
})
export class AppModule {
}
