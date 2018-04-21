import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignUpComponent} from './sign-up/sign-up.component';
import {RefreeComponent} from './refree/refree.component';
import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {SportsWriterComponent} from './sports-writer/sports-writer.component';
import {LeagueOwnerComponent} from './league-owner/league-owner.component';
import {LoginComponent} from './login/login.component';
import {Header1Component} from './header1/header1.component';
import {ForgetComponent} from './forget/forget.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'register',
    component: SignUpComponent
  },
  {
    path: 'refree',
    component: RefreeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'sport_writer',
    component: SportsWriterComponent
  },
  {
    path: 'league_owner',
    component: LeagueOwnerComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forget',
    component: ForgetComponent
  },
  {
    path: '',
    redirectTo: '/login', pathMatch: 'full'
  },
  // The wildcard route comes last because it matches every URL and should be selected only if no other routes are matched first.
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {enableTracing: true}// <-- debugging purposes only
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
