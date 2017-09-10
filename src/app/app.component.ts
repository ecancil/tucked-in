import { Component } from '@angular/core';
import {Services} from './service/Services'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(private services:Services){
  }

  title = 'app';
}
