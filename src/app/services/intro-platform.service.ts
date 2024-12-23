import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// نموذج البيانات (إذا كنت تستخدم TypeScript، يُفضل تعريف واجهة)
export interface IntroPlatform {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  visitTime: string;
  contactNumber: string;
  userAvatar: string;
  partnerLogos: { logoUrl: string }[];
  callToActionButtons: { text: string; url: string }[];
  socialLinks: { platform: string; url: string }[];
}

@Injectable({
  providedIn: 'root', // يجعل الخدمة متاحة في كل المشروع
})
export class IntroPlatformService {
  private apiUrl = 'https://localhost:7151/api/IntroPlatforms'; // رابط الـ API

  constructor(private http: HttpClient) {}

  // جلب البيانات من الـ API
  getIntroPlatform(): Observable<IntroPlatform[]> {
    return this.http.get<IntroPlatform[]>(this.apiUrl);
  }
}
