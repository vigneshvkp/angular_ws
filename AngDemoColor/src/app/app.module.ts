import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {DirectoryComponent} from './directory/directory.component';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FilterPipe} from './filter.pipe';
import {LogginService} from './loggin.service';
import {DataService} from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    RouterModule.forRoot([
      {
        // path: 'directory/:ninja',
        path: 'directory',
        component: DirectoryComponent
      },
      {
        path: 'home',
        component: HomeComponent
      }
    ])
  ],
  providers: [LogginService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
