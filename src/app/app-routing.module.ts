import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'users', component: UserComponent },
  // { path: 'users', component: UserComponent , redirectTo: ''},
  { path: 'users/:userId', component: UserDetailComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
