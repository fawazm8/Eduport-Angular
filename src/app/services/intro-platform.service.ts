import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IntroPlatform } from '../views/demo/index2/models/IntroPlatform.model';


@Injectable({
  providedIn: 'root',
})
export class IntroPlatformService {
  private apiUrl = 'https://localhost:7151/api/IntroPlatforms';

  constructor(private http: HttpClient) {}

  getIntroPlatforms(): Observable<IntroPlatform[]> {
    return this.http.get<IntroPlatform[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError('Something went wrong; please try again later.');
  }
}
