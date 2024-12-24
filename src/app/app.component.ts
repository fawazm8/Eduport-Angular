import { Component, inject, ViewChild } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet,
  Event,
} from '@angular/router';
import { BackToTopComponent } from './components/back-to-top.component';
import { TitleService } from './core/service/title.service';
import { NgProgressComponent, NgProgressModule } from 'ngx-progressbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BackToTopComponent, NgProgressModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(NgProgressComponent) progressBar!: NgProgressComponent;

  private router = inject(Router);
  private titleService = inject(TitleService);

  constructor() {
    // تحقق من وجود router قبل الاشتراك في الأحداث
    if (this.router) {
      this.router.events.subscribe((event: Event) => this.checkRouteChange(event));
    }
  }

  ngOnInit(): void {
    // تحقق من وجود الخدمة قبل الاستدعاء
    if (this.titleService) {
      this.titleService.init();
    }
  }

  checkRouteChange(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.progressBar?.start();
    }
    if (
      routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError
    ) {
      setTimeout(() => {
        this.progressBar?.complete();
      }, 200);
    }
  }
}
