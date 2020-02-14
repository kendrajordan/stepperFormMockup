import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpParams, HttpHeaders } from '@angular/common/http';
import { Iuser } from '../Iuser';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';//Error handling


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _url: string ="http://localhost:3000/users";
  constructor(private http: HttpClient) { }
}
