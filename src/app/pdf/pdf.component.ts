import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
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
  @Input() public incident;
  @Output() public pdf_child = new EventEmitter();
  objectKeys = Object.keys;


      
  }