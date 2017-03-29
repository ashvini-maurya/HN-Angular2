import { Routes, RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';

import { HomeComponent } from './home/home.component';
import { StoryComponent } from './story/story.component';


const routes: Routes = [
	{path:'', redirectTo:'/home', pathMatch:'full'},
	{path: 'home', component:HomeComponent},
	{path: 'story', component:StoryComponent}
];


@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})


export class RoutingModule{}