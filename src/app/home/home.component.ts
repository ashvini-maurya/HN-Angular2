import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HackernewsApiService } from '../hackernews-api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
	items;

  constructor(private _hackernewsApiService: HackernewsApiService) { 
  }

  ngOnInit() {
    this.currentPage = 1
  	this._hackernewsApiService.getStories('news', currentPage)
  					.subscribe(
  						items => this.items = items,
  						error => console.log('Error getting data from hackerNewsAPI'));
  }

}
