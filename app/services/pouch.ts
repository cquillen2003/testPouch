import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';

//Prevent TypeScript errors
//http://stackoverflow.com/questions/31173738/typescript-getting-error-ts2304-cannot-find-name-require
declare var require: any;

var PouchDB = require('pouchdb');
var PouchDBFind = require('pouchdb-find');


@Injectable()
export class Pouch {
	
	db;
  
	constructor(private http: Http) {
		PouchDB.plugin(PouchDBFind);
	}
	
	setup() {
		console.log('Create and sync Pouch...');
		
		this.db = new PouchDB('test');
		
		PouchDB.sync(this.db, 'http://cquillen.cloudant.com/test_public');
	}

}