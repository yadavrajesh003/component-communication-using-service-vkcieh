import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DataService } from './data.service';
import {UserFormComponent} from './user-form/user-form.component';
import {UserListComponent} from './user-list/user-list.component';


@NgModule({
  imports:      [ 
      BrowserModule
    , FormsModule
     ],
  declarations: [ 
      AppComponent
    , HelloComponent
    , UserFormComponent
    , UserListComponent
     ],
  bootstrap:    [ AppComponent ],
  providers: [DataService]
})
export class AppModule { }
