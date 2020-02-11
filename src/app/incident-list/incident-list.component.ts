import { Component, OnInit, Inject } from '@angular/core';
import { IncidentService } from '../incident.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EditCirFormComponent} from '../cir-form-edit/cir-form-edit.component';
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


  tableColumns: string[] = ['Incident Id', 'Incident Date', 'Nature of Incident', 'Region','County','Location','Edit'];

  getIncidentById(id){
    return this.incidents.filter((item) => item.incidentId==id)[0];
  }
  openDialog(id){
    this.incident =this.getIncidentById(id);

    const dialogRef = this.dialog.open(EditCirFormComponent, {
      width: '50%',
      data: {incident:this.incident}
    });

  }

}
export interface DialogData {
incident:any;
}
/*@Component({
  selector: 'edit-incident-dialog',
  templateUrl: 'edit-incident-dialog.html',
})
export class EditIncidentDialog {

  constructor(
    public dialogRef: MatDialogRef<EditIncidentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
    public incidents = [];
    public errorMsg: string;

    ngOnInit() {
    }
  onNoClick(): void {
    this.dialogRef.close();
  }


}*/

