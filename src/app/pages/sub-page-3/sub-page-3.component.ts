import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { WhatsappComponent } from '../../shared/whatsapp/whatsapp.component';
import { ThemeToggleComponent } from '../../shared/theme-toggle/theme-toggle.component';

@Component({
  selector: 'sub-page-3',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, WhatsappComponent, ThemeToggleComponent],
  templateUrl: './sub-page-3.component.html',
  styleUrls: ['./sub-page-3.component.css'],
})
export class SubPage3Component {
  parallaxOffset = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrolled = window.scrollY || document.documentElement.scrollTop || 0;
    this.parallaxOffset = scrolled * 0.3;
  }

  galleryImages: string[] = [
    'galery/img_galery_1.jpeg',
    'galery/img_galery_2.jpeg',
    'galery/img_galery_3.jpeg',
    'galery/img_galery_4.jpeg',
    'galery/img_galery_5.jpeg',
    'galery/img_galery_6.jpeg',
    'galery/img_galery_7.jpeg',
    'galery/img_galery_8.jpeg',
    'galery/img_galery_9.jpeg',
    'galery/img_galery_10.jpeg',
    'galery/img_galery_11.jpeg',
    'galery/img_galery_12.jpeg',
    'galery/img_galery_13.jpeg',
    'galery/img_galery_14.jpeg',
    'galery/img_galery_15.jpeg',
    'galery/img_galery_16.jpeg',
    'galery/img_galery_17.jpeg',
    'galery/img_galery_18.jpeg',
    'galery/img_galery_19.jpeg',
    'galery/img_galery_20.jpeg',
    'galery/img_galery_21.jpeg',
    'galery/img_galery_22.jpeg',
    'galery/img_galery_1.jpeg',
    'galery/img_galery_2.jpeg',
    'galery/img_galery_3.jpeg',
    'galery/img_galery_4.jpeg',
    'galery/img_galery_5.jpeg',
    'galery/img_galery_6.jpeg',
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
