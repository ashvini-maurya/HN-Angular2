import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
// import { MaterialModule } from '@angular/material';
// import {BrowserAnimationsModule} from '@angular/package-browser/animations';
//import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoutingModule } from './app.routes';
import { StoryComponent } from './story/story.component';

import { HackernewsApiService } from './hackernews-api.service';
import { CommentsComponent } from './comments/comments.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    StoryComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    //BrowserAnimationsModule,
    //NoopAnimationsModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    // MaterialModule,
    RoutingModule
  ],
  providers: [HackernewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }