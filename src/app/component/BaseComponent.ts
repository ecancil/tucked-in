import {EventHubService, SystemEventTypes} from "../manager/eventHub/event-hub.service";
/**
 * Created by ecancil on 9/9/17.
 */


export abstract class BaseComponent{
	constructor(private hub: EventHubService){
		hub.subscribe(event => {
			console.log(event);
			switch (event[0]){
				case SystemEventTypes.LOGGED_IN:
					this.loggedIn(event[1]);
					break;
				case SystemEventTypes.BOOKS_UPDATED:
					this.booksUpdated(event[1]);
						break;
            case SystemEventTypes.REGISTERED:
               this.registered(event[1]);
               break;
            case SystemEventTypes.REGISTRATION_FAILED:
               this.registrationFailed(event[1]);
               break;
            case SystemEventTypes.LOGIN_FAILED:
               this.loginFailed(event[1])
               break;
			}
		})
   }

   loggedIn(message?:any):void{

   }

   registered(message?:any):void{

   }

   registrationFailed(message?:any):void{

   }

   loginFailed(message?:any):void{

   }

   booksUpdated(message?:any):void{

   }


}
