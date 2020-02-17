
import { IncidentService } from '../incident.service';
import { Component, OnInit,ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import {MatPaginator} from '@angular/material';
import { incident } from '../incident';
import { ActivatedRoute } from '@angular/router';
import { OptionsDialogComponent } from '../options-dialog/options-dialog.component';
@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.scss']
})
export class IncidentListComponent implements OnInit {
  public routename:string; 
  public incidents = [];
  public dataSource:any = []; 
  public incidentId:number;
  public incident:incident[];
  public incidentCreatorId:number = 3333;
  public tableColumns: string[]; 
  highlightedRows=[];
  public incidentColumns = ['id', 'incidentDate', 'incidentType', 'region','county'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  constructor(private _incidentService: IncidentService,public dialog:MatDialog,private route:ActivatedRoute) { }
  ngOnInit() {
    this.route.paramMap.subscribe(data=>{
      this.routename = data.get('routename');
    })
    if(this.routename == 'allincidents'){
      console.log('all incidents');
      this.tableColumns = this.incidentColumns;
      this.getAllIncidents();
    }else if(this.routename == 'allsafetyremediations'){
      console.log('all safety');
    }else if(this.routename == 'myincidents'){
      console.log('my incidents');
      this.tableColumns = this.incidentColumns;
      this.getIncidentsById();

    }else if(this.routename == 'mysafetyremediations'){
      console.log('my safety');
    }
    this.dataSource.paginator = this.paginator; 
    this.dataSource.sort = this.sort;
      
  }

  openOptionsDialog(row){
    //console.log(row);
  this.dialog.open(OptionsDialogComponent,
    {
    data: {rowdata:row}
  });
}    
  getAllIncidents(){
    this._incidentService.getIncidents()
    .subscribe(data=>{
      this.incidents= data;
     this.dataSource = new MatTableDataSource(this.incidents);
    })
  }
  applyFilter(filterValue:string){
    this.dataSource.filter= filterValue.trim().toLowerCase();
  }
  getIncidentsById(){
    this._incidentService.getMyIncidents(this.incidentCreatorId)
    .subscribe(data=>{
      this.incidents= data;
      this.dataSource = new MatTableDataSource(this.incidents);
  })
}

}
export interface DialogData {
incidentId:number;
}


