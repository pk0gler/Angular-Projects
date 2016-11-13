import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, Jsonp, JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { GithubUserInfoComponent } from './github-user-info/github-user-info.component';
import {GithubApiService} from "./github-api.service";

@NgModule({
  declarations: [
    AppComponent,
    GithubUserInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [GithubApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
