import { Component, OnInit } from '@angular/core';
import {Validators, FormControl} from "@angular/forms";
import {BaseComponent} from "../BaseComponent";
import {AuthModel} from "../../model/AuthModel";
import {EventHubService} from "../../manager/eventHub/event-hub.service";
import {Services} from "../../service/Services";

@Component({
  selector: 'app-profile-editor',
  templateUrl: 'profile-editor.component.html',
  styleUrls: ['profile-editor.component.scss']
})
export class ProfileEditorComponent extends BaseComponent implements OnInit {

   constructor(public authModel:AuthModel, public services:Services, private theHub: EventHubService) {
      super(theHub);
   }

  ngOnInit() {
  }

   usernameFormField = new FormControl('', [
      Validators.required
   ]);

}
