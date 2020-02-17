import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EditCirFormComponent} from '../cir-form-edit/cir-form-edit.component';
import {SafetyFormComponent} from '../safety-form/safety-form.component';
import {DeleteComponent} from '../delete/delete.component';
export interface DialogData {
  rowdata:any;
  }

@Component({
  selector: 'app-options-dialog',
  templateUrl: './options-dialog.component.html',
  styleUrls: ['./options-dialog.component.scss']
})
export class OptionsDialogComponent{

  constructor(public dialog:MatDialog,public dialogRef: MatDialogRef<OptionsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    openEditDialog(id){
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
      this.onNoClick();
    }
    openSafetyDialog(id){
      const dialogRef = this.dialog.open(SafetyFormComponent, {
        width: '50%',
        data: {incidentId:id}
    });
    this.onNoClick();
  }
    onNoClick(): void {
      this.dialogRef.close();
    } 
}