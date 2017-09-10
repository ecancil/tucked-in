//modules
import { MaterialModule} from './module/material-module/material-module.module'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Services } from './service/Services';
import { AngularFireModule } from 'angularfire2'

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyBBuWdjZiWS7F1tWEDa6UVaGb0etO7M3Rw",
  authDomain: "tucked-in.firebaseapp.com",
  databaseURL: "https://tucked-in.firebaseio.com/",
  storageBucket: "gs://tucked-in.appspot.com",
  messagingSenderId: "309346971067"
};

//components
import { AppComponent } from './app.component';

 import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './component/login/login.component';
import {AuthModel} from "./model/AuthModel";
import {EventHubService} from "./manager/eventHub/event-hub.service";
import {BookModel} from "./model/BookModel";

console.log(AuthModel);

@NgModule({
  declarations: [
				LoginComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [Services, AuthModel, EventHubService, BookModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
