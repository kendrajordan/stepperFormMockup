import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject, Input } from '@angular/core';
import { IncidentService } from '../incident.service'
export interface DialogData {
  id: number;
};

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  id:number;
  constructor(
    public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private _incidentService: IncidentService
  ) {
    this.id = data.id;
   }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();

  }
  deleteIncident(id){
    this._incidentService.deleteIncident(id)
    .subscribe(data =>console.log('Incident deleted'),
    error =>console.log('There was an error'));
  }
}
