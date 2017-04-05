import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class HackernewsApiService {
	baseUrl: string;

  constructor(private http: Http) { 
  	//this.baseUrl = 'https://hacker-news.firebaseio.com/v0';
    this.baseUrl = 'https://node-hnapi.herokuapp.com';
  }

  // getStories(): Observable<any> {
  // 	return this.http.get(`${this.baseUrl}/topstories.json`)
  // 					.map(res => res.json());
  // }

  getStories(storyType: string, page: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${storyType}?page=${page}`)
            .map(res => res.json());
  }

  // getStory(id: number): Observable<any> {
  // 	return this.http.get(`${this.baseUrl}/item/${id}.json`)
  // 					.map(res => res.json());
  // }

}
