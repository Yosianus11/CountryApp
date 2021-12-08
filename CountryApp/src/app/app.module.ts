import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AllCountryComponent } from './component/all-country/all-country.component';
import { DetailCountryComponent } from './component/detail-country/detail-country.component';
import { AreaPipe } from './area.pipe';
import { LareaPipe } from './larea.pipe';
import { CurrPipe } from './curr.pipe';
import { AddCountryComponent } from './component/add-country/add-country.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllCountryComponent,
    DetailCountryComponent,
    AreaPipe,
    LareaPipe,
    CurrPipe,
    AddCountryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
