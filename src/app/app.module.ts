import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CirFormComponent } from './cir-form/cir-form.component';
import {MaterialModule} from './material/material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ScrollingModule } from "@angular/cdk/scrolling";


@NgModule({
  declarations: [
    AppComponent,
    CirFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ScrollingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
