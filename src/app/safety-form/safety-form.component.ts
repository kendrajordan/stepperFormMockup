import { Component, OnInit,Inject,Input } from '@angular/core';
import { FormGroup, FormControl,Validators,FormBuilder,FormArray} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { IncidentService } from '../incident.service';
import { incident } from '../incident';
import{Isafety1,Isafety2,Isafety3} from '../safety';
import{IsafetyRemediation} from '../safetyRemediation';
import { DOCUMENT } from '@angular/common';
export interface DialogData {
  incidentId:number;
  }
@Component({
  selector: 'app-safety-form',
  templateUrl: './safety-form.component.html',
  styleUrls: ['./safety-form.component.scss']
})
export class SafetyFormComponent implements OnInit {

  IncidentSpecificDetails: FormGroup;
  cirForm:any;
  remediation:any;
  remediationId:number;
  incidentId:number;
  errorMsg:string;
  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<SafetyFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private _incidentService: IncidentService, @Inject(DOCUMENT) private _document: Document ) {
      this.incidentId = data.incidentId;
    }

  ngOnInit() {
    
    this._incidentService.getIncidentById(this.incidentId)
    .subscribe(
      data =>  this.remediation = data,
      error => this.errorMsg = error);

      this.IncidentSpecificDetails = this.fb.group({
        narrative:['',[Validators.required,
          Validators.maxLength(600)]],
        correctiveAction:['',[Validators.required,
          Validators.maxLength(600)]],
        preventativeAction:['',[Validators.required,
          Validators.maxLength(600)]],
        afterCare:['',[Validators.required,
          Validators.maxLength(600)]],
        emergencyServices:['',[Validators.required,
          Validators.maxLength(600)]]
      });

  }


  onSubmit(remediation){
 
  //console.warn(this.IncidentMetaDetails.value);
  // console.warn(this.WhoWasInvolved.value);
  //console.warn(this.IncidentSpecificDetails.value);
    let step_1 = this.IncidentSpecificDetails.status;

    if(step_1 == 'VALID'){
      const form1: Isafety1 = {
        narrative:this.IncidentSpecificDetails.value.narrative,
        correctiveAction:this.IncidentSpecificDetails.value.correctiveAction,
        preventativeAction:this.IncidentSpecificDetails.value.preventativeAction,
        afterCare:this.IncidentSpecificDetails.value.afterCare,
        emergencyServices:this.IncidentSpecificDetails.value.emergencyServices
      };
      
      this.cirForm = form1;
      this.cirForm.remediationId = this.remediationId?this.remediationId: null;
      this.cirForm.incidentId = this.incidentId;
    }else if( step_1 != 'VALID') 
    alert('Please go back to "Incident Meta details" and complete the form.');
    return;
   }

    onNoClick(): void {
      this.dialogRef.close();
    
  }
}
