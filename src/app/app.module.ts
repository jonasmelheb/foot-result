import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { MatchListComponent } from './resources/matches/match-list/match-list.component';
import { MatchDetailComponent } from './resources/matches/match-detail/match-detail.component';
import { appRoutes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MatchListComponent,
    MatchDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
