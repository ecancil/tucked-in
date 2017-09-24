import { Component, OnInit } from '@angular/core';
import {BaseComponent} from "../BaseComponent";
import {EventHubService} from "../../manager/eventHub/event-hub.service";
import {Services} from "../../service/Services";
import {GiphyModel} from "../../model/GiphyModel";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-giphy-searcher',
  templateUrl: 'giphy-searcher.component.html',
  styleUrls: ['giphy-searcher.component.scss']
})
export class GiphySearcherComponent extends BaseComponent implements OnInit {

   constructor(public services:Services, private theHub: EventHubService, public giphyModel:GiphyModel) {
      super(theHub);
   }

  searchGiphy(){
      this.services.searchGiphy("sandwich");
  }

  ngOnInit() {
  }


   giphySearcher: FormControl = new FormControl();
}
