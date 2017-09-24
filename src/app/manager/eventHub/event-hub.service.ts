import {Injectable, EventEmitter} from '@angular/core';
import {Subject} from "rxjs";



export enum SystemEventTypes{
   REGISTERED,
   REGISTRATION_FAILED,
	LOGGED_IN,
   LOGIN_FAILED,
	BOOKS_UPDATED
}



@Injectable()
export class EventHubService extends Subject<any> {

	constructor() { super() }

	loggedIn(message?:any){
      this.sendMessage(SystemEventTypes.LOGGED_IN, message);
	}

	registered(message?:any){
      this.sendMessage(SystemEventTypes.REGISTERED, message);
   }

   registrationFailed(message?:any){
      this.sendMessage(SystemEventTypes.REGISTRATION_FAILED, message);
   }

	booksUpdated(message?:any){
      this.sendMessage(SystemEventTypes.BOOKS_UPDATED, message);
	}

	private sendMessage(type: SystemEventTypes, theMessage?:any){
	   let message: [SystemEventTypes, any];
	   message = [type, theMessage]
      this.next(message);
   }

}
