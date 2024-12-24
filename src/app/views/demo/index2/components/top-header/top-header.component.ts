import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // استيراد CommonModule
import { IntroPlatformService } from '@/app/core/services/api/intro-platform.service';

@Component({
  selector: 'index2-top-header',
  standalone: true,
  imports: [CommonModule], // تأكد من إضافة CommonModule هنا
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css'],
})
export class TopHeaderComponent implements OnInit {
  introData: any = {}; // لتخزين البيانات القادمة من الـ API

  constructor(private introPlatformService: IntroPlatformService) {}

  ngOnInit(): void {
    console.log('Fetching intro data...');
    this.introPlatformService.getIntroPlatforms().subscribe({
      next: (data) => {
        console.log('Data received:', data);
        this.introData = data[0] || {}; // افتراض أن العنصر الأول يحتوي على البيانات
        if (!this.introData.SocialLinks) {
          this.introData.SocialLinks = []; // تعيين قائمة فارغة إذا كانت SocialLinks غير موجودة
        }
      },
      error: (err) => {
        console.error('Error fetching intro data:', err);
      },
    });
  }
}
