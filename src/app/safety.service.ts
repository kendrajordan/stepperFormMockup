import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpParams, HttpHeaders } from '@angular/common/http';
import {IsafetyRemediation } from './safetyRemediation';;
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';//Error handling
@Injectable({
  providedIn: 'root'
})
export class SafetyService {
  private _url: string ="http://localhost:3000/safety";
  constructor(private http: HttpClient) { }
}
