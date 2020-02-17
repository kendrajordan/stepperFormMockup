import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';
import { incident } from '../incident';
import { IncidentService} from '../incident.service'

@Component({
  selector: 'app-incident-details',
  templateUrl: './incident-details.component.html',
  styleUrls: ['./incident-details.component.scss']
})
export class IncidentDetailsComponent implements OnInit {
  id:string;
  incident: incident;
  constructor(private route:ActivatedRoute,private _incidentService: IncidentService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(data=>{
      this.id = data.get('id');
  })
   this.getIncidentData();
}

    getIncidentData(){
      this._incidentService.getIncidentById(this.id)
      .subscribe(
        data => {this.incident = data}

    )
  }
    downloadPDF(){
      let data = document.getElementById('parentdiv');  
      html2canvas(data).then(canvas => {
        var imgWidth = 208;   
        var pageHeight = 295;    
        var imgHeight = canvas.height * imgWidth / canvas.width;  
        var heightLeft = imgHeight;
        var position = 0;    
        const contentDataURL = canvas.toDataURL('image/png') ; 
      // let pdf = new jsPDF('l', 'cm', 'a4'); //Generates PDF in landscape mode
        let pdf = new jsPDF('p', 'mm', 'a4'); //Generates PDF in portrait mode
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);  
      pdf.output('dataurlnewwindow');
    });
  }
}
