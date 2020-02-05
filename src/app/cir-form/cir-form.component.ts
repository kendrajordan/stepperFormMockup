import { Component, OnInit } from '@angular/core';
import {formData} from '../formdata';
import {Person} from '../person';
import { FormGroup, FormControl,Validators,FormBuilder,FormArray} from '@angular/forms';
@Component({
  selector: 'app-cir-form',
  templateUrl: './cir-form.component.html',
  styleUrls: ['./cir-form.component.scss']
})
export class CirFormComponent implements OnInit {
  regions = ['Cumberland Plateau','north-central Bluegrass','Pennyroyal Plateau','Coal Fields','Jackson Purchase'];
  counties = ['Anderson', 'Bath', 'Bell', 'Boone', 'Bourbon', 'Boyd', 'Boyle', 'Bracken', 'Breathitt', 'Bullitt', 'Campbell', 'Carroll', 'Carter', 'Casey', 'Clark', 'Clay', 'Elliott', 'Estill','Fayette', 'Fleming', 'Floyd', 'Franklin', 'Gallatin', 'Garrard', 'Grant', 'Greenup', 'Hardin', 'Harlan', 'Harrison', 'Henry', 'Jackson', 'Jefferson', 'Jessamine', 'Johnson', 'Kenton','Knott', 'Knox', 'LaRue', 'Laurel', 'Lawrence', 'Lee', 'Leslie', 'Letcher', 'Lewis', 'Lincoln', 'Madison', 'Magoffin', 'Marion', 'Martin', 'Mason', 'McCreary', 'Meade', 'Menifee', 'Mercer', 'Montgomery', 'Morgan', 'Nelson', 'Nicholas', 'Oldham', 'Owen', 'Owsley', 'Pendleton', 'Perry', 'Pike', 'Powell', 'Pulaski', 'Robertson', 'Rockcastle', 'Rowan', 'Scott', 'Shelby', 'Spencer', 'Taylor', 'Trimble', 'Washington', 'Wayne', 'Whitley', 'Wolfe','Woodford'];
  priorities = ['High','Low'];
  roles = ['Victim','Perpetrator'];
  incidentTypes= [{name:'type 1',value:'1'}, {name:'type 2', value:'2'}, {name:'type 3', value:'3'}];
  today = new Date().toJSON().slice(0,10).replace(/-/g,'-');
  
  

  IncidentMetaDetails:FormGroup;
  WhoWasInvolved:FormGroup;
  IncidentSpecificDetails: FormGroup;
  cirForm:any;
  constructor(private fb: FormBuilder) {}


  ngOnInit() {
    let person = new Person();
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
      peopleInvolved: this.fb.array([])
    });
    this.IncidentSpecificDetails = this.fb.group({
      narrative:['',Validators.maxLength(600)],
      correctiveAction:['',Validators.maxLength(10)],
      preventativeAction:['',Validators.maxLength(600)],
      afterCare:['',Validators.required],
      emergencyServices:['',Validators.required]
    });

  }
//getter
  get peopleInvolved() {
    return this.WhoWasInvolved.get('peopleInvolved') as FormArray;
  }
  addPerson() {
    this.peopleInvolved.push(this.fb.group({
      firstname:['',Validators.required],
      lastname: ['',Validators.required],
      role: ['',Validators.required]
    }))
  }
  onSubmit(){
    // TODO: Use EventEmitter with form value
  // console.warn(this.IncidentMetaDetails.value);
   //console.warn(this.WhoWasInvolved.value);
  // console.warn(this.IncidentSpecificDetails.value);
    let step_1 = this.IncidentMetaDetails.status;
    let step_2 = this.WhoWasInvolved.status;
    let step_3 = this.IncidentSpecificDetails.status;
    if(step_1 == 'VALID'&& step_2 == 'VALID' && step_3 == 'VALID'){
      let form = new formData();
      form.incidentDate = this.IncidentMetaDetails.value.incidentDate;
      form.location = this.IncidentMetaDetails.value.location;
      form.incidentType = this.IncidentMetaDetails.value.incidentType;
      form.priority = this.IncidentMetaDetails.value.priority;
      form.region = this.IncidentMetaDetails.value.region;
      form.county = this.IncidentMetaDetails.value.county;
      form.supervisor = this.WhoWasInvolved.value.supervisor;
      form.peopleInvolved = this.WhoWasInvolved.value.peopleInvolved;
      form.narrative = this.IncidentSpecificDetails.value.narrative;
      form.correctiveAction = this.IncidentSpecificDetails.value.correctiveAction;
      form.preventativeAction = this.IncidentSpecificDetails.value.preventativeAction;
      form.afterCare = this.IncidentSpecificDetails.value.afterCare;
      form.emergencyServices = this.IncidentSpecificDetails.value.emergencyServices;
  
      this.cirForm = form;

    }else if(step_3 != 'VALID'){
      alert('Please complete "Incident Specific details" and complete the form.');
      return;
    }else if(step_2 != 'VALID'){
      alert('Please go back to "Who was involved" and complete the form.');
      return;
    }else if( step_1 != 'VALID') 
    alert('Please go back to "Incident Meta details" and complete the form.');
    return;
   }
   removeAPerson(index){
     this.peopleInvolved.removeAt(index);
     return this.peopleInvolved;
   }
}
