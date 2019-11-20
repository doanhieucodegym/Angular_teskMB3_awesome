import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ListAwesomesComponent} from './list-awesomes/list-awesomes.component';

import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateAwesomeComponent } from './create-awesome/create-awesome.component';
import { UpdateAwesomeComponent } from './update-awesome/update-awesome.component';



@NgModule({
  declarations: [
    AppComponent,
    ListAwesomesComponent,
    CreateAwesomeComponent,
    UpdateAwesomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
