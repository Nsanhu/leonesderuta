import { Component, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ThemeToggleComponent } from '../../shared/theme-toggle/theme-toggle.component';
import { WhatsappComponent } from '../../shared/whatsapp/whatsapp.component';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';

@Component({
  selector: 'app-galery',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, ThemeToggleComponent, WhatsappComponent, SpinnerComponent],
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
  galleryImages: string[] = [
    '/galery/winter/img_1.jpeg',
    '/galery/winter/img_2.jpeg',
    '/galery/winter/img_3.jpeg',
    '/galery/winter/img_4.jpeg',
    '/galery/winter/img_5.jpeg',
    '/galery/winter/img_6.jpeg',
    '/galery/winter/img_7.jpeg',
    '/galery/winter/img_8.jpeg',
    '/galery/winter/img_9.jpeg',
    '/galery/winter/img_10.jpeg',
    '/galery/winter/img_11.jpeg',
    '/galery/winter/img_12.jpeg',
    '/galery/winter/img_13.jpeg',
    '/galery/winter/img_15.jpeg',
    '/galery/winter/img_16.jpeg',
    '/galery/winter/img_17.jpeg',
    '/galery/winter/img_18.jpeg',
    '/galery/winter/img_19.jpeg',
    '/galery/winter/img_20.jpeg',
    '/galery/winter/img_21.jpeg',
    '/galery/winter/img_22.jpeg',
    '/galery/winter/img_23.jpeg',
    '/galery/winter/img_24.jpeg',
    '/galery/winter/img_25.jpeg',
    '/galery/winter/img_26.jpeg',
    '/galery/winter/img_27.jpeg',
    '/galery/winter/img_28.jpeg',
    '/galery/winter/img_29.jpeg',
    '/galery/winter/img_30.jpeg',
    '/galery/winter/img_31.jpeg',
    '/galery/winter/img_32.jpeg',
    '/galery/winter/img_33.jpeg',
    '/galery/winter/img_34.jpeg',
    '/galery/winter/img_35.jpeg',
    '/galery/winter/img_36.jpeg',
    '/galery/winter/img_37.jpeg',
    '/galery/winter/img_38.jpeg',
    '/galery/winter/img_39.jpeg',
    '/galery/winter/img_40.jpeg',
    '/galery/winter/img_41.jpeg',
    '/galery/winter/img_42.jpeg',
    '/galery/winter/img_43.jpeg',
    '/galery/winter/img_44.jpeg',
    '/galery/winter/img_45.jpeg',
    '/galery/winter/img_46.jpeg',
    '/galery/winter/img_47.jpeg',
    '/galery/winter/img_48.jpeg',
    '/galery/winter/img_49.jpeg',
    '/galery/winter/img_50.jpeg',
    '/galery/winter/img_51.jpeg',
    '/galery/winter/img_52.jpeg',
    '/galery/winter/img_53.jpeg',
    '/galery/winter/img_54.jpeg',
    '/galery/winter/img_55.jpeg',
    '/galery/winter/img_56.jpeg',
    '/galery/winter/img_57.jpeg',
    '/galery/winter/img_58.jpeg',
    '/galery/winter/img_59.jpeg',
    '/galery/winter/img_60.jpeg',
    '/galery/winter/img_61.jpeg',
    '/galery/winter/img_62.jpeg',
    '/galery/winter/img_63.jpeg',
    '/galery/winter/img_64.jpeg',
    '/galery/winter/img_65.jpeg',
    '/galery/winter/img_66.jpeg',
    '/galery/winter/img_67.jpeg',
    '/galery/winter/img_68.jpeg',
    '/galery/winter/img_69.jpeg',
    '/galery/winter/img_70.jpeg',
    '/galery/winter/img_71.jpeg',
    '/galery/winter/img_72.jpeg',
    '/galery/winter/img_73.jpeg',
    '/galery/winter/img_74.jpeg',
    '/galery/winter/img_75.jpeg',
    '/galery/winter/img_76.jpeg',
    '/galery/winter/img_77.jpeg',
    '/galery/winter/img_78.jpeg',
    '/galery/winter/img_79.jpeg',
    '/galery/winter/img_80.jpeg',
    '/galery/winter/img_81.jpeg',
    '/galery/winter/img_82.jpeg',
    '/galery/winter/img_83.jpeg',
    '/galery/winter/img_84.jpeg',
    '/galery/winter/img_85.jpeg',
    '/galery/winter/img_86.jpeg',
    '/galery/winter/img_87.jpeg',
    '/galery/winter/img_88.jpeg',
    '/galery/pucon/img_1.jpeg',
    '/galery/pucon/img_2.jpeg',
    '/galery/pucon/img_3.jpeg',
    '/galery/pucon/img_4.jpeg',
    '/galery/pucon/img_5.jpeg',
    '/galery/cajondelmaipo/img_1.jpeg',
    '/galery/cajondelmaipo/img_2.jpeg',
    '/galery/cajondelmaipo/img_3.jpeg',
    '/galery/cajondelmaipo/img_4.jpeg',
    '/galery/cajondelmaipo/img_5.jpeg',
    '/galery/cajondelmaipo/img_6.jpeg',
    '/galery/cajondelmaipo/img_7.jpeg',
    '/galery/cajondelmaipo/img_8.jpeg',
    '/galery/cajondelmaipo/img_9.jpeg',
    '/galery/cajondelmaipo/img_10.jpeg',
    '/galery/cajondelmaipo/img_11.jpeg',
    '/galery/cajondelmaipo/img_12.jpeg',
    '/galery/cajondelmaipo/img_13.jpeg',
    '/galery/cajondelmaipo/img_14.jpeg',
    '/galery/cajondelmaipo/img_15.jpeg',
    '/galery/cajondelmaipo/img_16.jpeg',
    '/galery/cajondelmaipo/img_17.jpeg',
    '/galery/cajondelmaipo/img_18.jpeg',
    '/galery/cajondelmaipo/img_19.jpeg',
    '/galery/cajondelmaipo/img_20.jpeg',
    '/galery/cajondelmaipo/img_21.jpeg',
    '/galery/cajondelmaipo/img_22.jpeg',
    '/galery/cajondelmaipo/img_23.jpeg',
  ];

  // MODAL PARA VER FOTOGRAFIAS
  selectedImageIndex: number | null = null;

  get filteredGalleryImages(): string[] {
    const images =
      this.selectedCategory === 'all'
        ? this.galleryImages
        : this.galleryImages.filter((img) =>
            img.toLowerCase().includes(`/galery/${this.selectedCategory.toLowerCase()}/`),
          );

    return images.slice(0, this.visibleImagesCount);
  }
  get totalCategoryImages(): number {
    if (this.selectedCategory === 'all') {
      return this.galleryImages.length;
    }

    return this.galleryImages.filter((img) =>
      img.toLowerCase().includes(`/galery/${this.selectedCategory.toLowerCase()}/`),
    ).length;
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
  // NUEVO: índice de cantidad de imágenes visibles
  visibleImagesCount: number = 12;

  // BOTÓN "VER MÁS"
  isLoadingMore: boolean = false;
  loadMoreImages(): void {
    this.isLoadingMore = true;

    setTimeout(() => {
      this.visibleImagesCount += 12;
      this.isLoadingMore = false;
    }, 2000); // 2 segundos
  }
  set selectedCategory(value: string) {
    this._selectedCategory = value;
    this.visibleImagesCount = 12; // Reinicia el conteo al cambiar filtro
  }
  get selectedCategory(): string {
    return this._selectedCategory;
  }
  private _selectedCategory: string = 'winter';
  // SPINNER
  changingCategory: boolean = false;
  changeCategory(category: string) {
    if (this._selectedCategory === category) return;

    this.changingCategory = true;

    setTimeout(() => {
      this.selectedCategory = category;
      this.changingCategory = false;
    }, 2000); // tiempo simulado de carga
  }
}
