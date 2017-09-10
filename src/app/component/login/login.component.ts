import { Component, OnInit } from '@angular/core';
import {AuthModel} from "../../model/AuthModel";
import {Services} from "../../service/Services";
import {EventHubService} from "../../manager/eventHub/event-hub.service";
import {BaseComponent} from '../BaseComponent'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit{

  constructor(public model:AuthModel, public services:Services, private theHub: EventHubService) {
  		super(theHub);
  }

  login(){
    this.services.login();
  }

  loggedIn(){
  		this.services.getAllBooks();
		}

  ngOnInit() {
  }

}
