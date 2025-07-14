import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  parallaxOffset = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrolled = window.scrollY || document.documentElement.scrollTop || 0;
    this.parallaxOffset = scrolled * 0.3;
  }

  galleryImages: string[] = [
    'assets/galery/img_galery_1.jpeg',
    'assets/galery/img_galery_2.jpeg',
    'assets/galery/img_galery_3.jpeg',
    'assets/galery/img_galery_4.jpeg',
    'assets/galery/img_galery_5.jpeg',
    'assets/galery/img_galery_6.jpeg',
    'assets/galery/img_galery_7.jpeg',
    'assets/galery/img_galery_8.jpeg',
    'assets/galery/img_galery_9.jpeg',
    'assets/galery/img_galery_10.jpeg',
    'assets/galery/img_galery_11.jpeg',
    'assets/galery/img_galery_12.jpeg',
    'assets/galery/img_galery_13.jpeg',
    'assets/galery/img_galery_14.jpeg',
    'assets/galery/img_galery_15.jpeg',
    'assets/galery/img_galery_16.jpeg',
    'assets/galery/img_galery_17.jpeg',
    'assets/galery/img_galery_18.jpeg',
    'assets/galery/img_galery_19.jpeg',
    'assets/galery/img_galery_20.jpeg',
    'assets/galery/img_galery_21.jpeg',
    'assets/galery/img_galery_22.jpeg',
    'assets/galery/img_galery_1.jpeg',
    'assets/galery/img_galery_2.jpeg',
    'assets/galery/img_galery_3.jpeg',
    'assets/galery/img_galery_4.jpeg',
    'assets/galery/img_galery_5.jpeg',
    'assets/galery/img_galery_6.jpeg',
  ];

  selectedImageIndex: number | null = null;

  openLightbox(index: number) {
    this.selectedImageIndex = index;
  }

  closeLightbox() {
    this.selectedImageIndex = null;
  }

  showNext() {
    if (this.selectedImageIndex !== null) {
      this.selectedImageIndex = (this.selectedImageIndex + 1) % this.galleryImages.length;
    }
  }

  showPrev() {
    if (this.selectedImageIndex !== null) {
      this.selectedImageIndex = (this.selectedImageIndex - 1 + this.galleryImages.length) % this.galleryImages.length;
    }
  }
}
