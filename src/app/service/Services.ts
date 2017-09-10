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


@Injectable()
export class Services implements IService{

  private service:IService;

  constructor (private fb : AngularFireDatabase, private http:Http, private authModel:AuthModel, private bookModel:BookModel, private afAuth:AngularFireAuth, private ngZone: NgZone, private hub: EventHubService){
    this.service = new ServiceImpl(http);
  }

  login(){
    //this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    this.afAuth.auth.signInWithPopup(provider).then(result => {
						this.ngZone.run(() => {
							this.authModel.accessToken = result.credential.accessToken;
							this.authModel.user = result.user;
							console.log(this.hub.r);
							this.hub.loggedIn();
						});
    },
      error =>{
    });
  }



  getAllBooks(){
				this.bookModel.books = this.fb.list("/books");
				this.bookModel.books.subscribe(val => this.hub.booksUpdated());
		}

		getBookByID(id:string){

		}

  callService(endpoint:string, httpMethod:HTTPMethod, payload?:any):Promise<any>{
    return this.service.callService(endpoint, httpMethod, payload);
  }
}