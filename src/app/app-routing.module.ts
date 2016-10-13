import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';

const routes: Routes = [
      { path: '', component: HomeComponent },
       { path: 'home', component: HomeComponent },
      { path: 'home/:account_id', component: HomeComponent }

];

@NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule],
      providers: []
})
export class NoteApp2RoutingModule { }
