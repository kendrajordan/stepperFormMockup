import { Component, OnInit, Inject } from '@angular/core';
import { IncidentService } from '../incident.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EditCirFormComponent} from '../cir-form-edit/cir-form-edit.component';
import {DeleteComponent} from '../delete/delete.component';
@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.scss']
})
export class IncidentListComponent implements OnInit {
 public incidents = [];
 public errorMsg;
 public id:number;
 public incident;
  constructor(private _incidentService: IncidentService,public dialog: MatDialog) { }

  ngOnInit() {
    this._incidentService.getIncidents()
    .subscribe(data=>this.incidents = data,
      error =>this.errorMsg =error);
  }


  tableColumns: string[] = ['Incident Id', 'Incident Date', 'Nature of Incident', 'Region','County','Location','Edit','Delete'];

  openDialog(id){
    const dialogRef = this.dialog.open(EditCirFormComponent, {
      width: '50%',
      data: {id:id}
    });

  }
  openDeleteDialog(id){
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: '50%',
      data: {id:id}
    });
  }
}

export interface DialogData {
id:number;
}


