import { Component, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeToggleComponent } from '../../shared/theme-toggle/theme-toggle.component';
import { WhatsappComponent } from '../../shared/whatsapp/whatsapp.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, ThemeToggleComponent, WhatsappComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  parallaxOffset = 0;
  showFloatingButtons = true;
  isMobile = window.innerWidth < 768;

  // ----- GALERÍA -----
  galleryImages: string[] = [
    'galery/winter/img_1.jpeg',
    'galery/winter/img_2.jpeg',
    'galery/winter/img_3.jpeg',
    'galery/winter/img_4.jpeg',
    'galery/winter/img_5.jpeg',
    'galery/winter/img_6.jpeg',
    'galery/winter/img_7.jpeg',
    'galery/winter/img_8.jpeg',
    'galery/winter/img_9.jpeg',
    'galery/winter/img_10.jpeg',
    'galery/winter/img_11.jpeg',
    'galery/winter/img_12.jpeg',
    'galery/winter/img_13.jpeg',
    'galery/winter/img_14.jpeg',
    'galery/winter/img_15.jpeg',
    'galery/winter/img_16.jpeg',
    'galery/winter/img_17.jpeg',
    'galery/winter/img_18.jpeg',
    'galery/winter/img_19.jpeg',
    'galery/winter/img_20.jpeg',
    'galery/winter/img_21.jpeg',
    'galery/winter/img_22.jpeg',
    'galery/winter/img_23.jpeg',
    'galery/winter/img_24.jpeg',
  ];

  getGalleryLimit(): number {
    return window.innerWidth < 640 ? 16 : 24;
  }

  selectedImageIndex: number | null = null;

  openLightbox(index: number): void {
    this.selectedImageIndex = index;
    this.showFloatingButtons = false;
  }

  closeLightbox(): void {
    this.selectedImageIndex = null;
    this.showFloatingButtons = true;
  }

  showNext(): void {
    if (this.selectedImageIndex !== null) {
      this.selectedImageIndex = (this.selectedImageIndex + 1) % this.galleryImages.length;
    }
  }

  showPrev(): void {
    if (this.selectedImageIndex !== null) {
      this.selectedImageIndex = (this.selectedImageIndex - 1 + this.galleryImages.length) % this.galleryImages.length;
    }
  }

  // ----- EFECTO PARALLAX -----
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrolled = window.scrollY || document.documentElement.scrollTop || 0;
    this.parallaxOffset = scrolled * 0.3;
  }

  // ----- CAMBIO DE TAMAÑO -----
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = event.target.innerWidth < 768;
  }

  ngOnInit(): void {
    this.isMobile = window.innerWidth < 768;
  }

  // ----- FLIP CARD -----
  flippedIndex: number | null = null;

  toggleFlip(index: number | null): void {
    this.flippedIndex = index;
  }

  // ----- CARRUSEL -----
  @ViewChild('carousel') carousel!: ElementRef;
  currentIndex: number = 0;
  totalCards: number = 3;

  ngAfterViewInit(): void {
    const el = this.carousel.nativeElement as HTMLElement;

    el.addEventListener('scroll', () => {
      const scrollLeft = el.scrollLeft;
      const cardWidth = el.querySelector('div')?.clientWidth || 1;
      const index = Math.round(scrollLeft / (cardWidth + 16)); // 16 es el gap horizontal (space-x-4)
      this.currentIndex = Math.min(Math.max(index, 0), this.totalCards - 1);
    });
  }

  scrollCarousel(direction: 'left' | 'right') {
    const el = this.carousel.nativeElement as HTMLElement;
    const scrollAmount = el.offsetWidth;

    if (direction === 'left' && this.currentIndex > 0) {
      this.currentIndex--;
    } else if (direction === 'right' && this.currentIndex < this.totalCards - 1) {
      this.currentIndex++;
    }

    el.scrollTo({
      left: this.currentIndex * scrollAmount,
      behavior: 'smooth',
    });
  }

  // updateCurrentIndexFromScroll() {
  //   const el = this.carousel.nativeElement as HTMLElement;
  //   this.currentIndex = Math.round(el.scrollLeft / el.offsetWidth);
  // }
  goToCard(index: number) {
    const el = this.carousel.nativeElement as HTMLElement;
    const cardWidth = el.querySelector('div')?.clientWidth || 1;
    el.scrollTo({ left: index * (cardWidth + 16), behavior: 'smooth' });
    this.currentIndex = index;
  }
  totalCardsArray = Array.from({ length: this.totalCards });

  // SWIPE
  touchStartX: number = 0;
  touchEndX: number = 0;
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
  }
  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].clientX;
    this.handleSwipe();
  }
  handleSwipe() {
    const minSwipeDistance = 40; // puedes ajustar este valor

    const swipeDistance = this.touchEndX - this.touchStartX;

    if (swipeDistance > minSwipeDistance) {
      // Swipe hacia la derecha
      this.goToPreviousCard();
    } else if (swipeDistance < -minSwipeDistance) {
      // Swipe hacia la izquierda
      this.goToNextCard();
    }
  }

  goToNextCard() {
    if (this.currentIndex < this.totalCards - 1) {
      this.currentIndex++;
      this.goToCard(this.currentIndex);
    }
  }

  goToPreviousCard() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.goToCard(this.currentIndex);
    }
  }

  // ABOUT US
  aboutInView = false;
  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @HostListener('window:scroll', [])
  onScroll() {
    const rect = this.aboutSection.nativeElement.getBoundingClientRect();
    this.aboutInView = rect.top < window.innerHeight * 0.8;
  }
}
