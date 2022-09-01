import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionsModule } from './collections/collections.module';
import { HomeComponent } from './home/home.component';
import { NotFondComponent } from './not-fond/not-fond.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFondComponent],
  imports: [BrowserModule, CollectionsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
