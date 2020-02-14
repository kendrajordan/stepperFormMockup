import { Component, OnInit, Inject, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IncidentService } from '../incident.service';
import { incident } from '../incident';
import {IPeopleInvolved} from '../IPeopleInvolved';
import { DOCUMENT } from '@angular/common';
export interface DialogData {
  incidentId: number;
}
@Component({
  selector: 'app-cir-form-edit',
  templateUrl: '../cir-form-edit/cir-form-edit.component.html',
  styleUrls: ['../cir-form-edit/cir-form-edit.component.scss']
})
export class EditCirFormComponent implements OnInit {
  regions = ['Cumberland Plateau', 'north-central Bluegrass', 'Pennyroyal Plateau', 'Coal Fields', 'Jackson Purchase'];
  counties = ['Anderson', 'Bath', 'Bell', 'Boone', 'Bourbon', 'Boyd', 'Boyle', 'Bracken', 'Breathitt', 'Bullitt', 'Campbell', 'Carroll', 'Carter', 'Casey', 'Clark', 'Clay', 'Elliott', 'Estill', 'Fayette', 'Fleming', 'Floyd', 'Franklin', 'Gallatin', 'Garrard', 'Grant', 'Greenup', 'Hardin', 'Harlan', 'Harrison', 'Henry', 'Jackson', 'Jefferson', 'Jessamine', 'Johnson', 'Kenton', 'Knott', 'Knox', 'LaRue', 'Laurel', 'Lawrence', 'Lee', 'Leslie', 'Letcher', 'Lewis', 'Lincoln', 'Madison', 'Magoffin', 'Marion', 'Martin', 'Mason', 'McCreary', 'Meade', 'Menifee', 'Mercer', 'Montgomery', 'Morgan', 'Nelson', 'Nicholas', 'Oldham', 'Owen', 'Owsley', 'Pendleton', 'Perry', 'Pike', 'Powell', 'Pulaski', 'Robertson', 'Rockcastle', 'Rowan', 'Scott', 'Shelby', 'Spencer', 'Taylor', 'Trimble', 'Washington', 'Wayne', 'Whitley', 'Wolfe', 'Woodford'];
  priorities = ['High', 'Low'];
  roles = ['Victim', 'Perpetrator'];
  incidentTypes = [{ name: 'type 1', value: '1' }, { name: 'type 2', value: '2' }, { name: 'type 3', value: '3' }];
  today = new Date().toJSON().slice(0, 10).replace(/-/g, '-');



  IncidentMetaDetails: FormGroup;
  WhoWasInvolved: FormGroup;
  IncidentSpecificDetails: FormGroup;
  cirForm: incident;
  myIncidentModel: any;
  incidentId: number;
  errorMsg: string;
  incident: incident;
  blank_incident: incident;
  //TODO: remove incidentCreatorId# for testing
  //3333 is Kendra's personId
  incidentCreatorId = 3333;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<EditCirFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private _incidentService: IncidentService, @Inject(DOCUMENT) private _document: Document) {
    this.incidentId = data.incidentId;
  }

  ngOnInit() {
    if(this.incidentId){

      this.loadIncidentData(this.blank_incident);
      this._incidentService.getIncidentById(this.incidentId)
      .subscribe(
        data => { this.loadIncidentData(data)},
        error => this.errorMsg = error);
    }else{
     
      this.loadIncidentData(this.blank_incident);
    }
 
        
  }

  //getter
  get peopleInvolved() {
    return this.WhoWasInvolved.get('peopleInvolved') as FormArray;
  }

  addPerson() {
    this.peopleInvolved.push(this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      role: ['', Validators.required]
    }));

  }

 loadIncidentData(data:incident){
   if(data){
    this.incident = data;
    

    this.IncidentMetaDetails = this.fb.group({
      incidentDate: [this.incident.incidentDate, Validators.required],
      location: [this.incident.location, Validators.required],
      incidentType: [this.incident.incidentType, Validators.required],
      priority: [this.incident.priority, Validators.required],
      region: [this.incident.region, Validators.required],
      county: [this.incident.county, Validators.required]
    });
    let people = this.incident.peopleInvolved;
    this.WhoWasInvolved = this.fb.group({
      supervisor: [this.incident.supervisor, Validators.required],
      peopleInvolved:this.fb.array([
        this.fb.group({
          firstname:['',Validators.required],
          lastname: ['',Validators.required],
          role: ['',Validators.required]
        })
      ])
    });
    this.IncidentSpecificDetails = this.fb.group({
      narrative: [this.incident.narrative, [Validators.required,
        Validators.maxLength(600)]],
      correctiveAction: [this.incident.correctiveAction, [Validators.required,
        Validators.maxLength(600)]],
      preventativeAction: [this.incident.preventativeAction, [Validators.required,
        Validators.maxLength(600)]],
      afterCare: [this.incident.afterCare,[Validators.required,
        Validators.maxLength(600)]],
      emergencyServices: [this.incident.emergencyServices, [Validators.required,
        Validators.maxLength(600)]]
    });
    this.WhoWasInvolved.setControl('peopleInvolved', this.setExistingPeople(people));
    
   } else{

    this.IncidentMetaDetails = this.fb.group({
      incidentDate: ['',Validators.required],
      location: ['',Validators.required],
      incidentType: ['',Validators.required],
      priority:  ['',Validators.required],
      region:  ['',Validators.required],
      county: ['',Validators.required]
    });
    this.WhoWasInvolved = this.fb.group({
      supervisor:  ['',Validators.required],
      peopleInvolved: this.fb.array([
        this.fb.group({
          firstname:['',Validators.required],
          lastname: ['',Validators.required],
          role: ['',Validators.required]
        })
      ])
    });
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
   
 }

  onSubmit(incident) {

      let step_1 = this.IncidentMetaDetails.status;
      let step_2 = this.WhoWasInvolved.status;
      let step_3 = this.IncidentSpecificDetails.status;
    console.log(this.IncidentSpecificDetails);
      if (step_1 == 'VALID' && step_2 == 'VALID' && step_3 == 'VALID') {
        const form: incident = {
          id: incident? incident.id : '',
          incidentCreatorId:this.incidentCreatorId,
          incidentDate:this.IncidentMetaDetails.value.incidentDate,
          location: this.IncidentMetaDetails.value.location,
          incidentType: this.IncidentMetaDetails.value.incidentType,
          priority: this.IncidentMetaDetails.value.priority,
          region: this.IncidentMetaDetails.value.region,
          county: this.IncidentMetaDetails.value.county,
          supervisor:this.WhoWasInvolved.value.supervisor,
          peopleInvolved:this.WhoWasInvolved.value.peopleInvolved,
          narrative:this.IncidentSpecificDetails.value.narrative,
          correctiveAction:this.IncidentSpecificDetails.value.correctiveAction,
          preventativeAction:this.IncidentSpecificDetails.value.preventativeAction,
          afterCare:this.IncidentSpecificDetails.value.afterCare,
          emergencyServices:this.IncidentSpecificDetails.value.emergencyServices
        };

       
        if(incident){
          this.updateIncident(form);
        }else{
          this.createIncident(form);
        }


    } else if (step_3 != 'VALID') {
      alert('Please complete "Incident Specific details" and complete the form.');
      return;
    } else if (step_2 != 'VALID') {
      alert('Please go back to "Who was involved" and complete the form.');
      return;
    } else if (step_1 != 'VALID')
      alert('Please go back to "Incident Meta details" and complete the form.');
    return;
  }

  removeAPerson(index) {
    this.peopleInvolved.removeAt(index);
    return this.peopleInvolved;
  }
  onNoClick(): void {
    this.dialogRef.close();

  }
  updateIncident(form){
    this._incidentService.updateIncident(form)
    .subscribe(data => this.refreshPage() ,
    error =>console.log(error.message));

  }
  createIncident(form){
    this._incidentService.addAnIncident(form)
    .subscribe(data => this.refreshPage(),
    error =>console.log(error.message), )
}
  setExistingPeople(peopleInvolved:IPeopleInvolved[]): FormArray {
    const formArray = new FormArray([]);
    peopleInvolved.forEach(p => {
      formArray.push(this.fb.group({
        firstname: p.firstname,
        lastname: p.lastname,
        role: p.role
      }));
    });
  
    return formArray;
  }
  refreshPage() {
    this._document.defaultView.location.reload();
  }
}
