import { Component, OnInit } from '@angular/core';
import {AuthModel} from "../../model/AuthModel";
import {Services} from "../../service/Services";
import {EventHubService} from "../../manager/eventHub/event-hub.service";
import {BaseComponent} from '../BaseComponent'
import {Validators, FormControl} from "@angular/forms";
import {EMAIL_VALIDATOR} from "@angular/forms/src/directives/validators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit{

  constructor(public authModel:AuthModel, public services:Services, private theHub: EventHubService) {
  		super(theHub);
  }

  isLoggingIn = false;
  login(){
			this.isLoggingIn = true;
    this.services.login();
  }

  isRegistering = false;
   register(){
      this.services.createUser(this.authModel.signupEmail, this.authModel.signupPasswordVerification)
      this.isRegistering = true;
      this.registrationError = null;
   }

   isLoggedIn = false;
  loggedIn(message?:any){
     this.isLoggedIn = true;
      //this.services.getAllBooks();
   }

   registered(message?:any){
      this.isRegistering = false;
   }

   registrationError:String;
   registrationFailed(message?:any){
      this.isRegistering = false;
      this.registrationError = message;
   }

  ngOnInit() {
  }


   emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email
   ]);

   passwordFormControl = new FormControl('', [
      Validators.required,
      Validators.min(6)
   ]);

   passwordVerificationFormControl = new FormControl('', [
      Validators.required,
      Validators.min(6)
   ]);



}
