import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-safety-remediations-details',
  templateUrl: './safety-remediations-details.component.html',
  styleUrls: ['./safety-remediations-details.component.scss']
})
export class SafetyRemediationsDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  id:string;
  ngOnInit() {
    this.route.paramMap.subscribe(data=>{
      this.id = data.get('id');
    })
  //use a service to get all of the details
  }

}
