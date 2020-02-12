import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpParams, HttpHeaders } from '@angular/common/http';
import { incident } from './incident';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';//Error handling

@Injectable({
  providedIn: 'root'
})
export class IncidentService {
//Get incident data
private _url: string ="http://localhost:3000/incidents";
  constructor(private http: HttpClient) { }
  getIncidents(): Observable<incident[]>{
    return this.http.get<incident[]>(this._url);
  

  }
  getIncidentById(id):Observable<incident>{

    return this.http.get<incident>(`${this._url}/${id}`);
  
  }
  updateIncident(incident: incident):Observable<void>{

    return this.http.put<void>(`${this._url}/${incident.id}`, incident, {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
  })
     
    
  }
  deleteIncident(id):Observable<void>{
    return this.http.delete<void>(`${this._url}/${id}`,{
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
  })
  }
  addAnIncident(incident: incident): Observable<incident> {
    return this.http.post<incident>(this._url, incident, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    })
    
}
}