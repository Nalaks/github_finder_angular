import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { UserSearchComponent } from './user-search/user-search.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'home', component: UserSearchComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
