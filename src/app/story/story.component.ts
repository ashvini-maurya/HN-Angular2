import { Component, Input, OnInit } from '@angular/core';
import { HackernewsApiService } from '../hackernews-api.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  @Input() storyID: number;
  item;

  constructor(private _hackernewsApiService: HackernewsApiService) { }

  ngOnInit() {
   	this._hackernewsApiService.getStory(this.storyID).subscribe(data => {
  						this.item = data
  					}, error => console.log('Errror in loading story' + this.storyID));
  }

}
