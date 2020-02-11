export interface incident {
    incidentId:string;
    incidentDate: string;
    location: string;
    incidentType: string;
    priority: string;
    region: string;
    county: string;
    supervisor:string;
    peopleInvolved:any;
    narrative:string;
    correctiveAction:string;
    preventativeAction:string;
    afterCare: string;
    emergencyServices:string;
}