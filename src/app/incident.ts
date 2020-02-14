import {IPeopleInvolved} from './IPeopleInvolved';
export interface incident {
    id:number;
    incidentCreatorId:number;
    incidentDate: string;
    location: string;
    incidentType: string;
    priority: string;
    region: string;
    county: string;
    supervisor:string;
    peopleInvolved:IPeopleInvolved[];
    narrative:string;
    correctiveAction:string;
    preventativeAction:string;
    afterCare: string;
    emergencyServices:string;
}