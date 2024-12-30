import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutSiteService } from '@/app/core/services/api/about-site.service';
import { AboutSite } from '@/app/models/about-site.model';

@Component({
  selector: 'app-about',
  standalone: true, // تعريف كـ Standalone Component
  imports: [CommonModule], // إضافة الوحدات اللازمة مثل CommonModule
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  aboutSites: AboutSite[] = []; // تخزين البيانات القادمة من API

  constructor(private aboutSiteService: AboutSiteService) {}

  ngOnInit(): void {
    // جلب البيانات من API عند تحميل المكون
    this.aboutSiteService.getAllAboutSites().subscribe({
      next: (data) => {
        this.aboutSites = data; // تخزين البيانات في المتغير
        console.log('AboutSites:', data); // طباعة البيانات للتأكد
      },
      error: (err) => {
        console.error('Error fetching AboutSites:', err); // التعامل مع الأخطاء
      },
    });
  }

  /**
   * دالة لجلب كلاس الخلفية للأيقونات بناءً على الفهرس
   * @param index رقم الفهرس
   * @returns كلاس CSS
   */
  getIconBgClass(index: number): string {
    const classes = ['bg-primary', 'bg-secondary', 'bg-success', 'bg-warning'];
    return classes[index % classes.length]; // اختيار الكلاس بناءً على الفهرس
  }
}
