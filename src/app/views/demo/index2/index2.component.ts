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

@Component({
  selector: 'app-index2',
  standalone: true,
  imports: [
    TopHeaderComponent,
    BannerComponent,
    AboutComponent,
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
  showAlert = true;
  introData: any = {};

  constructor(private introPlatformService: IntroPlatformService) {}

  ngOnInit(): void {
    console.log('Fetching intro data...');
    this.introPlatformService.getIntroPlatforms().subscribe({
      next: (data) => {
        console.log('Data received:', data);
        if (data && Array.isArray(data) && data.length > 0) {
          this.introData = data[0];
        } else {
          console.warn('No data found or invalid format:', data);
        }
      },
      error: (err) => {
        console.error('Error fetching intro data:', err);
      },
    });
  }
}
