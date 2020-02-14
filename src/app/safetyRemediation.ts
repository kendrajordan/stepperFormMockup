import {Isafety1,Isafety2,Isafety3} from './safety';
export interface IsafetyRemediation{
    id:number,
    incidentId:number,
    incidentCreatorId:number,
    remediationCreatorId:number,
    step1:Isafety1[];
    step2:Isafety2[];
    step3:Isafety3[];
    isCompleted:boolean;
} 