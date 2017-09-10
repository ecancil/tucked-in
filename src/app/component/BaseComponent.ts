import {EventHubService, SystemEventTypes} from "../manager/eventHub/event-hub.service";
/**
 * Created by ecancil on 9/9/17.
 */


export abstract class BaseComponent{
	constructor(private hub: EventHubService){
		hub.subscribe(event => {
			console.log(event);
			switch (event){
				case SystemEventTypes.LOGGED_IN:
					this.loggedIn();
					break;
				case SystemEventTypes.BOOKS_UPDATED:
					this.booksUpdated();
						break;
			}
		})
		}

		 loggedIn():void{

			}

			booksUpdated():void{

			}


}
