/**
 * Created by ecancil on 9/9/17.
 */
import { Injectable } from '@angular/core';
import {ServiceImpl} from './ServiceImpl'
import {Http} from '@angular/http';
import {NgZone} from '@angular/core'


import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import {AuthModel} from "../model/AuthModel";
import {EventHubService} from "../manager/eventHub/event-hub.service";
import { AngularFireDatabase } from 'angularfire2/database';
import {BookModel} from "../model/BookModel";
import {Observable} from "rxjs";


@Injectable()
export class Services implements IService{

  private service:IService;

  constructor (private fb : AngularFireDatabase, private http:Http, private authModel:AuthModel, private bookModel:BookModel, private afAuth:AngularFireAuth, private ngZone: NgZone, private hub: EventHubService){
    this.service = new ServiceImpl(http);
  }

  createUser(email, password){
     setTimeout(()=> {
        this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(result => {
              this.authModel.currentUser = firebase.auth().currentUser;
              this.hub.registered();
              this.hub.loggedIn();
           },
           (error: any) => {
              this.hub.registrationFailed(error.message);
           })
     }, 2000);
   }



  login(){
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('public_profile');
    provider.addScope('email');
    provider.addScope('user_photos');
    this.afAuth.auth.signInWithRedirect(provider).then(result => {
      console.log(result);
      this.ngZone.run(() => {
         this.authModel.accessToken = result.credential.accessToken;
         this.authModel.user = result.user;
         this.hub.loggedIn();
      });
    },
      error =>{
      console.log(error);
    });
  }



  getAllBooks(){
      this.bookModel.books = this.fb.list("/books");
      this.bookModel.books.subscribe(val => this.hub.booksUpdated());
   }

   getBookByID(id:string){

   }

  callService(endpoint:string, httpMethod:HTTPMethod, payload?:any):any{
    return this.service.callService(endpoint, httpMethod, payload);
  }
}
