import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://localhost:7151/api';

  constructor(private http: HttpClient) {}

  getTrendingCourses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/trending-courses`);
  }

  // خدمات إضافية عند الحاجة
  getCourseDetails(courseId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/courses/${courseId}`);
  }
}
