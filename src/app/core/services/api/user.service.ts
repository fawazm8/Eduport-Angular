import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userApiUrl = 'https://localhost:7151/api/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.userApiUrl);
  }

  getUserById(userId: number): Observable<any> {
    return this.http.get<any>(`${this.userApiUrl}/${userId}`);
  }
}
