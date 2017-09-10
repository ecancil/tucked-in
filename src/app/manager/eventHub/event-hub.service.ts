import {Injectable, EventEmitter} from '@angular/core';
import {Subject} from "rxjs";



export enum SystemEventTypes{
	LOGGED_IN,
	BOOKS_UPDATED
}

@Injectable()
export class EventHubService extends Subject<any> {

	r = Math.random();

	constructor() { super() }

	loggedIn(){
			this.next(SystemEventTypes.LOGGED_IN);
	}

	booksUpdated(){
			this.next(SystemEventTypes.BOOKS_UPDATED);
	}

}
