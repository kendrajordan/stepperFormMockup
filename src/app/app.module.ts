import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CirFormComponent } from './cir-form/cir-form.component'
import {EditCirFormComponent} from './cir-form-edit/cir-form-edit.component';
import {MaterialModule} from './material/material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { IncidentListComponent} from './incident-list/incident-list.component';
import {IncidentService} from './incident.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CirFormComponent,
    IncidentListComponent,
    EditCirFormComponent
    //EditIncidentDialog
    
  ],
 entryComponents:[EditCirFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ScrollingModule,
    HttpClientModule
  ],
  providers: [IncidentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
