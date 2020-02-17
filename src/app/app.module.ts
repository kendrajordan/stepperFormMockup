import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SafetyFormComponent } from './safety-form/safety-form.component'
import {EditCirFormComponent} from './cir-form-edit/cir-form-edit.component';
import {MaterialModule} from './material/material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { IncidentListComponent} from './incident-list/incident-list.component';
import {IncidentService} from './incident.service';
import {HttpClientModule} from '@angular/common/http';
import { DeleteComponent } from './delete/delete.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PdfComponent } from './pdf/pdf.component';
import { OptionsDialogComponent } from './options-dialog/options-dialog.component';
import { HomeComponent } from './home/home.component';
import { IncidentDetailsComponent } from './incident-details/incident-details.component';
import { SafetyRemediationsDetailsComponent } from './safety-remediations-details/safety-remediations-details.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SafetyFormComponent,
    IncidentListComponent,
    EditCirFormComponent,
    DeleteComponent,
    NavbarComponent,
    PageNotFoundComponent,
    PdfComponent,
    OptionsDialogComponent,
    HomeComponent,
    IncidentDetailsComponent,
    SafetyRemediationsDetailsComponent,
    LoginComponent,

    
  ],
 entryComponents:[EditCirFormComponent,DeleteComponent,SafetyFormComponent,OptionsDialogComponent],
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
