import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ChildOneComponent} from './child-one.component';
import {ChildTwoComponent} from './child-two.component';
import {ChildTwoNestedComponent} from './child-two-nested.component';
import {PageOneComponent} from './page-one.component';
import {PageTwoComponent} from './page-two.component';
import {HomeComponent} from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildOneComponent,
    ChildTwoComponent,
    PageOneComponent,
    PageTwoComponent,
    ChildTwoNestedComponent,
    HomeComponent,
    PageNotFoundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
