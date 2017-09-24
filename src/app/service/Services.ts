/**
 * Created by ecancil on 9/9/17.
 */
import { Injectable } from '@angular/core';
import {ServiceImpl,} from './ServiceImpl'
import {Http} from '@angular/http';
import {NgZone} from '@angular/core'


import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import {AuthModel} from "../model/AuthModel";
import {EventHubService} from "../manager/eventHub/event-hub.service";
import { AngularFireDatabase } from 'angularfire2/database';
import {BookModel} from "../model/BookModel";
import {HTTPMethod} from "../enum/enums";
import {IService} from "./IService";
import {GiphyModel} from "../model/GiphyModel";

const GIPHY_KEY = "6jIc8M3RMak5KL91Akuj2tblNWf4p9Np";

@Injectable()
export class Services implements IService{

  private service:IService;

  constructor (private fb : AngularFireDatabase, private http:Http, private authModel:AuthModel, private bookModel:BookModel, private afAuth:AngularFireAuth, private ngZone: NgZone, private hub: EventHubService, private giphyModel:GiphyModel){
    this.service = new ServiceImpl(http);
  }

  createUser(email, password):void{
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


  login():void{
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

  uploadPhoto(){

  }

  updateUser(){

  }



  getAllBooks(){
      this.bookModel.books = this.fb.list("/books");
      this.bookModel.books.subscribe(val => this.hub.booksUpdated());
   }

   getBookByID(id:string){

   }

   searchGiphy(keyword:string, limit:number = 200):void{
     if(keyword.length < 3)return;
     if(!this.giphyModel.hasGiphyResult(keyword)) {
        let endPoint = "https://api.giphy.com/v1/stickers/search?api_key=" + GIPHY_KEY + "&q=" + keyword + "&limit=" + limit + "&offset=0&rating=Y&lang=en";
        this.callService(endPoint, HTTPMethod.GET).then(result => {
               var results = JSON.parse(result._body).data;
              this.giphyModel.setGiphyResult(keyword, results);
           },
           err => {
              console.log(err);
           }
        )
     }
   }


  callService(endpoint:string, httpMethod:HTTPMethod, payload?:any):Promise<any>{
    return this.service.callService(endpoint, httpMethod, payload);
  }
}
