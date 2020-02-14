import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import html2canvas from 'html2canvas';

import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit{

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

  downloadPDF(){
    let data = document.getElementById('parentdiv');  
    html2canvas(data).then(canvas => {
      const contentDataURL = canvas.toDataURL('image/png')  
     // let pdf = new jsPDF('l', 'cm', 'a4'); //Generates PDF in landscape mode
       let pdf = new jsPDF(); //Generates PDF in portrait mode
      pdf.addImage(contentDataURL, 'PNG', 0, 0);  
    pdf.output('dataurlnewwindow');
  });
}}