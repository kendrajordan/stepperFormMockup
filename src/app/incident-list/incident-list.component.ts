import { Component, OnInit, Inject, ViewChild, AfterViewInit} from '@angular/core';
import { IncidentService } from '../incident.service';
import {MatSort} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EditCirFormComponent} from '../cir-form-edit/cir-form-edit.component';
import {DeleteComponent} from '../delete/delete.component';
import {SafetyFormComponent} from '../safety-form/safety-form.component';
import {MatTableDataSource} from '@angular/material/table';
import { incident } from '../incident';
@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.scss']
})
export class IncidentListComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
    
  dataSource: MatTableDataSource<any[]>;
  public incidents = [];
  public errorMsg;
  public incidentId:number;
  public incident:incident[];
  public incidentCreatorId:number = 3333;
  constructor(private _incidentService: IncidentService,public dialog: MatDialog) { }
  ngOnInit() {
    this._incidentService.getMyIncidents(this.incidentCreatorId)
    .subscribe(data=>{
      this.incidents= data;
      this.dataSource = new MatTableDataSource(this.incidents);
      this.dataSource.sort = this.sort;});
  
      
  }
  ngAfterViewInit(){
    

  }
 
    tableColumns: string[] = ['Incident Id', 'Incident Date', 'Nature of Incident', 'Region','County','Location','Edit','Delete',
    'Safety Remediation'];

    openDialog(id){
      const dialogRef = this.dialog.open(EditCirFormComponent, {
        width: '50%',
        data: {incidentId:id}
      });

    }
    openDeleteDialog(id){
      const dialogRef = this.dialog.open(DeleteComponent, {
        width: '50%',
        data: {incidentId:id}
      });
    }
    openSafetyDialog(id){
      const dialogRef = this.dialog.open(SafetyFormComponent, {
        width: '50%',
        data: {incidentId:id}
    });
  }
  getAllIncidents(){
    this._incidentService.getIncidents()
    .subscribe(data=>{
      this.incidents= data;
      this.dataSource = new MatTableDataSource(this.incidents);
      this.dataSource.sort = this.sort;});
  }
  
}

export interface DialogData {
incidentId:number;
}


