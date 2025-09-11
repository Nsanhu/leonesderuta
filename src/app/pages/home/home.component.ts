import { Component, HostListener,ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ThemeToggleComponent } from '../../shared/theme-toggle/theme-toggle.component';
import { WhatsappComponent } from "../../shared/whatsapp/whatsapp.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, ThemeToggleComponent, WhatsappComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  parallaxOffset = 0;
  showFloatingButtons = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrolled = window.scrollY || document.documentElement.scrollTop || 0;
    this.parallaxOffset = scrolled * 0.3;
  }

testimonials = [
  {
    name: 'Camila R.',
    comment: 'Una experiencia increíble, los paisajes fueron inolvidables y el equipo súper profesional.',
    stars: '★★★★★',
    img: 'assets/galery/img_galery_3.jpeg',
    quote: 'Este viaje me cambió la vida.',
    place: 'Valle del Elqui',
    date: 'Julio 2024'
  },
  {
    name: 'Matías L.',
    comment: 'Recomendado al 100%. Cumplieron con todo lo prometido. ¡Felicitaciones!',
    stars: '★★★★★',
    img: 'assets/galery/img_galery_5.jpeg',
    quote: 'Nada se compara a ver el amanecer en la cordillera.',
    place: 'Cajón del Maipo',
    date: 'Mayo 2024'
  },
  {
    name: 'Nicole S.',
    comment: 'Muy buena atención, amables, puntuales y con conocimiento de los lugares.',
    stars: '★★★★☆',
    img: 'assets/galery/img_galery_11.jpeg',
    quote: 'Sentí una conexión real con la naturaleza.',
    place: 'Parque Nacional Torres del Paine',
    date: 'Enero 2024'
  }
];

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
  
  getGalleryLimit(): number {
  const width = window.innerWidth;
  if (width < 640) {
    // Móvil: 4x4
    return 16;
  } else {
    // Escritorio y tablet: 6x5
    return 24;
  }
}

  selectedImageIndex: number | null = null;

  openLightbox(index: number) {
    this.selectedImageIndex = index;
    this.showFloatingButtons = false;
  }

  closeLightbox() {
    this.selectedImageIndex = null;
    this.showFloatingButtons = true;
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
  //  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

 

  isMobile = window.innerWidth < 768;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = event.target.innerWidth < 768;
  }

flippedIndex: number | null = null;

ngOnInit(): void {
  this.isMobile = window.innerWidth < 768;
  window.addEventListener('resize', () => {
    this.isMobile = window.innerWidth < 768;
  });
}

toggleFlip(index: number): void {
  this.flippedIndex = this.flippedIndex === index ? null : index;
}
}
