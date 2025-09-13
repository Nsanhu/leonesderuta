import { Component, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ThemeToggleComponent } from '../../shared/theme-toggle/theme-toggle.component';
import { WhatsappComponent } from '../../shared/whatsapp/whatsapp.component';

@Component({
  selector: 'app-galery',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, ThemeToggleComponent, WhatsappComponent],
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css'],
})
export class GaleryComponent {
  categories = [
    { labelKey: 'GALLERY.FILTER.ALL', value: 'all' },
    { labelKey: 'GALLERY.FILTER.WINTER', value: 'winter' },
    { labelKey: 'GALLERY.FILTER.PUCON', value: 'pucon' },
    { labelKey: 'GALLERY.FILTER.CAJON', value: 'cajondelmaipo' },
  ];


  selectedCategory: string = 'winter';
  galleryImages: string[] = [
    '/assets/galery/winter/img_1.jpeg',
    '/assets/galery/winter/img_2.jpeg',
    '/assets/galery/winter/img_3.jpeg',
    '/assets/galery/winter/img_4.jpeg',
    '/assets/galery/winter/img_5.jpeg',
    '/assets/galery/winter/img_6.jpeg',
    '/assets/galery/winter/img_7.jpeg',
    '/assets/galery/winter/img_8.jpeg',
    '/assets/galery/winter/img_9.jpeg',
    '/assets/galery/winter/img_10.jpeg',
    '/assets/galery/winter/img_11.jpeg',
    '/assets/galery/winter/img_12.jpeg',
    '/assets/galery/winter/img_13.jpeg',
    '/assets/galery/winter/img_14.jpeg',
    '/assets/galery/winter/img_15.jpeg',
    '/assets/galery/winter/img_16.jpeg',
    '/assets/galery/winter/img_17.jpeg',
    '/assets/galery/winter/img_18.jpeg',
    '/assets/galery/winter/img_19.jpeg',
    '/assets/galery/winter/img_20.jpeg',
    '/assets/galery/winter/img_21.jpeg',
    '/assets/galery/winter/img_22.jpeg',
    '/assets/galery/winter/img_23.jpeg',
    '/assets/galery/winter/img_24.jpeg',
    '/assets/galery/winter/img_25.jpeg',
    '/assets/galery/winter/img_26.jpeg',
    '/assets/galery/winter/img_27.jpeg',
    '/assets/galery/winter/img_28.jpeg',
    '/assets/galery/winter/img_29.jpeg',
    '/assets/galery/winter/img_30.jpeg',
    '/assets/galery/winter/img_31.jpeg',
    '/assets/galery/winter/img_32.jpeg',
    '/assets/galery/winter/img_33.jpeg',
    '/assets/galery/winter/img_34.jpeg',
    '/assets/galery/winter/img_35.jpeg',
    '/assets/galery/winter/img_36.jpeg',
    '/assets/galery/winter/img_37.jpeg',
    '/assets/galery/winter/img_38.jpeg',
    '/assets/galery/winter/img_39.jpeg',
    '/assets/galery/winter/img_40.jpeg',
    '/assets/galery/winter/img_41.jpeg',
    '/assets/galery/winter/img_42.jpeg',
    '/assets/galery/winter/img_43.jpeg',
    '/assets/galery/winter/img_44.jpeg',
    '/assets/galery/winter/img_45.jpeg',
    '/assets/galery/winter/img_46.jpeg',
    '/assets/galery/winter/img_47.jpeg',
    '/assets/galery/winter/img_48.jpeg',
    '/assets/galery/winter/img_49.jpeg',
    '/assets/galery/winter/img_50.jpeg',
    '/assets/galery/winter/img_51.jpeg',
    '/assets/galery/winter/img_52.jpeg',
    '/assets/galery/winter/img_53.jpeg',
    '/assets/galery/winter/img_54.jpeg',
    '/assets/galery/winter/img_55.jpeg',
    '/assets/galery/winter/img_56.jpeg',
    '/assets/galery/winter/img_57.jpeg',
    '/assets/galery/winter/img_58.jpeg',
    '/assets/galery/winter/img_59.jpeg',
    '/assets/galery/winter/img_60.jpeg',
    '/assets/galery/winter/img_61.jpeg',
    '/assets/galery/winter/img_62.jpeg',
    '/assets/galery/winter/img_63.jpeg',
    '/assets/galery/winter/img_64.jpeg',
    '/assets/galery/winter/img_65.jpeg',
    '/assets/galery/winter/img_66.jpeg',
    '/assets/galery/winter/img_67.jpeg',
    '/assets/galery/winter/img_68.jpeg',
    '/assets/galery/winter/img_69.jpeg',
    '/assets/galery/winter/img_70.jpeg',
    '/assets/galery/winter/img_71.jpeg',
    '/assets/galery/winter/img_72.jpeg',
    '/assets/galery/winter/img_73.jpeg',
    '/assets/galery/winter/img_74.jpeg',
    '/assets/galery/winter/img_75.jpeg',
    '/assets/galery/winter/img_76.jpeg',
    '/assets/galery/winter/img_77.jpeg',
    '/assets/galery/winter/img_78.jpeg',
    '/assets/galery/winter/img_79.jpeg',
    '/assets/galery/winter/img_80.jpeg',
    '/assets/galery/winter/img_81.jpeg',
    '/assets/galery/winter/img_82.jpeg',
    '/assets/galery/winter/img_83.jpeg',
    '/assets/galery/winter/img_84.jpeg',
    '/assets/galery/winter/img_85.jpeg',
    '/assets/galery/winter/img_86.jpeg',
    '/assets/galery/winter/img_87.jpeg',
    '/assets/galery/winter/img_88.jpeg',
    '/assets/galery/pucon/img_1.jpeg',
    '/assets/galery/pucon/img_2.jpeg',
    '/assets/galery/pucon/img_3.jpeg',
    '/assets/galery/pucon/img_4.jpeg',
    '/assets/galery/pucon/img_5.jpeg',
    '/assets/galery/cajondelmaipo/img_1.jpeg',
    '/assets/galery/cajondelmaipo/img_2.jpeg',
    '/assets/galery/cajondelmaipo/img_3.jpeg',
    '/assets/galery/cajondelmaipo/img_4.jpeg',
    '/assets/galery/cajondelmaipo/img_5.jpeg',
    '/assets/galery/cajondelmaipo/img_6.jpeg',
    '/assets/galery/cajondelmaipo/img_7.jpeg',
    '/assets/galery/cajondelmaipo/img_8.jpeg',
    '/assets/galery/cajondelmaipo/img_9.jpeg',
    '/assets/galery/cajondelmaipo/img_10.jpeg',
    '/assets/galery/cajondelmaipo/img_11.jpeg',
    '/assets/galery/cajondelmaipo/img_12.jpeg',
    '/assets/galery/cajondelmaipo/img_13.jpeg',
    '/assets/galery/cajondelmaipo/img_14.jpeg',
    '/assets/galery/cajondelmaipo/img_15.jpeg',
    '/assets/galery/cajondelmaipo/img_16.jpeg',
    '/assets/galery/cajondelmaipo/img_17.jpeg',
    '/assets/galery/cajondelmaipo/img_18.jpeg',
    '/assets/galery/cajondelmaipo/img_19.jpeg',
    '/assets/galery/cajondelmaipo/img_20.jpeg',
    '/assets/galery/cajondelmaipo/img_21.jpeg',
    '/assets/galery/cajondelmaipo/img_22.jpeg',
    '/assets/galery/cajondelmaipo/img_23.jpeg',
  ];

  // MODAL PARA VER FOTOGRAFIAS
  selectedImageIndex: number | null = null;

  get filteredGalleryImages(): string[] {
    if (this.selectedCategory === 'all') {
      return this.galleryImages;
    }

    return this.galleryImages.filter((img) =>
      img.toLowerCase().includes(`/galery/${this.selectedCategory.toLowerCase()}/`),
    );
  }
public openModal(index: number): void {
  console.log('Abriendo imagen', index); // 👈 esto sí es válido
  this.showFloatingButtons = false;
  this.selectedImageIndex = index;
}

public closeModal(): void {
  this.showFloatingButtons = true;
  this.selectedImageIndex = null;
}

public nextImage(): void {
  if (this.selectedImageIndex !== null) {
    this.selectedImageIndex = (this.selectedImageIndex + 1) % this.filteredGalleryImages.length;
  }
}

public prevImage(): void {
  if (this.selectedImageIndex !== null) {
    this.selectedImageIndex =
      (this.selectedImageIndex - 1 + this.filteredGalleryImages.length) % this.filteredGalleryImages.length;
  }
}

  // contador de imagenes
  getVisibleImageCount(): number {
    const width = window.innerWidth;

    if (width < 640) {
      return 4;
    } else if (width < 768) {
      return 6;
    } else if (width < 1024) {
      return 9;
    } else {
      return 12;
    }
  }
  // ocultar borones flotantes
  showFloatingButtons = true;
}
