import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes} from '@angular/router';
import { trigger, transition, query, style, animate } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { IntroComponent } from './components/home/intro/intro.component';
import { SkillsComponent } from './components/home/skills/skills.component';

const appRoutes: Routes =  [


  {
    path:'', 
    component: HomeComponent,
    data: {
      state: 'home'
      }  
    },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PortfolioComponent,
    IntroComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes), 
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
