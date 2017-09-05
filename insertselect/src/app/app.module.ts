import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { UserserviceService} from './users/listuser/userservice.service';
import { ListuserComponent } from './users/listuser/listuser.component';
import { InsertuserComponent } from './users/insertuser/insertuser.component';
import { FormsModule} from '@angular/forms';
import { UserlistserviceService} from './users/insertuser/userlistservice.service';
import { User} from './users/insertuser/user';
import { SearchuserComponent } from './users/searchuser/searchuser.component';
import { SearchserviceService} from './users/searchuser/searchservice.service';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListuserComponent,
    InsertuserComponent,
    SearchuserComponent,
    HeroesComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
  ],
  providers: [UserserviceService, UserlistserviceService, User, SearchserviceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
