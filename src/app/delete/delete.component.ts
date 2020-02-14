import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject, Input } from '@angular/core';
import { IncidentService } from '../incident.service';
import { DOCUMENT } from '@angular/common';
export interface DialogData {
  incidentId: number;
};

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  incidentId:number;
  constructor(
    public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private _incidentService: IncidentService, @Inject(DOCUMENT) private _document: Document
  ) {
    this.incidentId = data.incidentId;
   }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();

  }
  deleteIncident(id){
    this._incidentService.deleteIncident(id)
    .subscribe( data =>this.refreshPage(),
    error =>console.log('There was an error'));
  }
  refreshPage() {
    this._document.defaultView.location.reload();
  }
}
