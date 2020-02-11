import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpParams } from '@angular/common/http';
import { incident } from './incident';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';//Error handling

@Injectable({
  providedIn: 'root'
})
export class IncidentService {
//Get incident data
private _url: string ="/assets/data/incidents.json";
  constructor(private http: HttpClient) { }
  getIncidents(): Observable<incident[]>{
    return this.http.get<incident[]>(this._url)
    .pipe(catchError(this.errorHandler));

  }
  
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}
