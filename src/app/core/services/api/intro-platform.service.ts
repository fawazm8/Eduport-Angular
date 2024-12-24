import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IntroPlatformService {
  private apiUrl = 'https://localhost:7151/api/introplatform';

  constructor(private http: HttpClient) {}

  getIntroPlatforms(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getIntroPlatformById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
