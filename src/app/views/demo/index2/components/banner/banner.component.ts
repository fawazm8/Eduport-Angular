import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // استيراد CommonModule
import { IntroPlatform } from '../../models/IntroPlatform.model';


@Component({
  selector: 'index2-banner',
  standalone: true,
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  imports: [CommonModule], // إضافة CommonModule هنا
})
export class BannerComponent {
  @Input() bannerData: IntroPlatform | null = null;
}
