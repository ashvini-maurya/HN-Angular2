import { Routes, RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';

import { HomeComponent } from './home/home.component';
import { StoryComponent } from './story/story.component';
import { CommentsComponent } from './comments/comments.component';


const routes: Routes = [
	// {path:'', redirectTo:'/home', pathMatch:'full'},
	// {path: 'home', component:HomeComponent},
	{path:'',  component:HomeComponent},
	{path: 'story', component:StoryComponent},
	{path: 'item', component:CommentsComponent}
];


@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})


export class RoutingModule{}