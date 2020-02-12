import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EditCirFormComponent} from '../cir-form-edit/cir-form-edit.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(id){
    const dialogRef = this.dialog.open(EditCirFormComponent, {
      width: '50%',
      data: {id:id}
    });
  }
}
