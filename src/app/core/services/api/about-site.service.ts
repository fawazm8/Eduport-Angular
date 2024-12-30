import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AboutSite } from '@/app/models/about-site.model';

@Injectable({
  providedIn: 'root',
})
export class AboutSiteService {
  private apiUrl = 'https://localhost:7151/api/AboutSite';

  constructor(private http: HttpClient) {}

  getAllAboutSites(): Observable<AboutSite[]> {
    return this.http.get<AboutSite[]>(this.apiUrl);
  }
}
