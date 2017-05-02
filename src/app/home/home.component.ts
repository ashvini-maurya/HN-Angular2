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
  page_number = 0;

  constructor(private _hackernewsApiService: HackernewsApiService) {
  }

  ngOnInit() {
  	this._hackernewsApiService.getStories()
			.subscribe(
				items => this.items = items,
				error => console.log('Error getting data from hackerNewsAPI'));
  }

  clickMe() {
    alert(this.page_number);
  }

  incrementPageNumber(){
    this.page_number++;
  }

}
