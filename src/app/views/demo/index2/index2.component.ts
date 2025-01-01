import { Component, OnInit } from '@angular/core';
import { IntroPlatformService } from '@/app/core/services/api/intro-platform.service';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { TrendingCourseComponent } from './components/trending-course/trending-course.component';
import { VideoComponent } from './components/video/video.component';
import { EventComponent } from './components/event/event.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { ClientSliderComponent } from '@/app/components/client-slider/client-slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { AppMenuComponent } from "../../../components/app-menu/app-menu.components";
import { IntroPlatform } from './models/IntroPlatform.model';
import { AboutSite } from '@/app/models/about-site.model';




@Component({
  selector: 'app-index2',
  standalone: true,
  imports: [
    TopHeaderComponent,
    BannerComponent, // أضف AboutComponent هنا
    AboutComponent, // إضافة AboutComponent
    TrendingCourseComponent,
    VideoComponent,
    EventComponent,
    NewsletterComponent,
    ClientSliderComponent,
    FooterComponent,
    NgbAlertModule,
    CommonModule,
    AppMenuComponent
],
  templateUrl: './index2.component.html',
})
export class Index2Component implements OnInit {
  introData: IntroPlatform[] = [];
  aboutData!: AboutSite;
showAlert: any;

  constructor(private introPlatformService: IntroPlatformService) {}

  ngOnInit(): void {
    this.introPlatformService.getIntroPlatforms().subscribe({
      next: (data: IntroPlatform[]) => {
        this.introData = data;

        // تحويل IntroPlatform إلى AboutSite
        if (this.introData.length > 0) {
          this.aboutData = this.mapIntroPlatformToAboutSite(this.introData[0]);
        }
      },
      error: (err) => {
        console.error('Error fetching intro data:', err);
      },
    });
  }

  // دالة لتحويل IntroPlatform إلى AboutSite
  private mapIntroPlatformToAboutSite(intro: IntroPlatform): AboutSite {
    return {
      id: intro.Id || 0,
      title: intro.Title || '',
      subtitle: intro.subtitle || '',
      description: intro.Description || '',
      imageUrl: intro.imageUrl || 'default-image.jpg',
      features: intro.features || [], // مصفوفة فارغة إذا لم يكن الحقل موجودًا
      createdAt: new Date(), // قيمة افتراضية لحقل createdAt
    };
  }
}

