import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignUpComponent} from './sign-up/sign-up.component';
import {RefreeComponent} from './refree/refree.component';


const routes: Routes = [
  {
    path: 'register/',
    component: SignUpComponent
  },
  {
    path: 'refree/',
    component: RefreeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
