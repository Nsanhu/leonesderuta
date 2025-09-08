import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-galery',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css'],
})
export class GaleryComponent {
  galleryImages: string[] = [
    './assets/galery/img_galery_1.jpeg',
    './assets/galery/img_galery_2.jpeg',
    './assets/galery/img_galery_3.jpeg',
    './assets/galery/img_galery_4.jpeg',
    './assets/galery/img_galery_5.jpeg',
    './assets/galery/img_galery_6.jpeg',
    './assets/galery/img_galery_7.jpeg',
    './assets/galery/img_galery_8.jpeg',
    './assets/galery/img_galery_9.jpeg',
    './assets/galery/img_galery_10.jpeg',
    './assets/galery/img_galery_11.jpeg',
    './assets/galery/img_galery_12.jpeg',
    './assets/galery/img_galery_13.jpeg',
    './assets/galery/img_galery_14.jpeg',
    './assets/galery/img_galery_15.jpeg',
    './assets/galery/img_galery_16.jpeg',
    './assets/galery/img_galery_17.jpeg',
    './assets/galery/img_galery_18.jpeg',
    './assets/galery/img_galery_19.jpeg',
    './assets/galery/img_galery_20.jpeg',
    './assets/galery/img_galery_21.jpeg',
    './assets/galery/img_galery_22.jpeg',
  ];

  // Opcional: índice para lightbox (si lo estás usando)
  selectedImageIndex: number | null = null;

  openLightbox(index: number) {
    this.selectedImageIndex = index;
  }

  closeLightbox() {
    this.selectedImageIndex = null;
  }

  showPrev() {
    if (this.selectedImageIndex !== null && this.selectedImageIndex > 0) {
      this.selectedImageIndex--;
    }
  }

  showNext() {
    if (
      this.selectedImageIndex !== null &&
      this.selectedImageIndex < this.galleryImages.length - 1
    ) {
      this.selectedImageIndex++;
    }
  }
  getVisibleImageCount(): number {
  const width = window.innerWidth;

  if (width < 640) {
    // sm: 1 columna → 4 fotos (4 filas)
    return 4;
  } else if (width < 768) {
    // md: 2 columnas → 6 fotos (3 filas)
    return 6;
  } else if (width < 1024) {
    // lg: 3 columnas → 9 fotos (3 filas)
    return 9;
  } else {
    // xl: 4 columnas → 12 fotos (3 filas)
    return 12;
  }
}
}