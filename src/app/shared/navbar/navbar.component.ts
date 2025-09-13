import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isMenuOpen = false; // Menú hamburguesa principal
  isTourMenuOpen = false; // Submenú Tours desplegable
  currentLang: string;

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('lang') || 'es';
    this.translate.setDefaultLang('es');
    this.translate.use(savedLang);
    this.currentLang = savedLang;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    // Al cerrar menú, también cerramos el submenú
    if (!this.isMenuOpen) {
      this.isTourMenuOpen = false;
    }
  }

  toggleTourMenu() {
    this.isTourMenuOpen = !this.isTourMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.isTourMenuOpen = false;
  }

  changeLang(event: Event) {
    const selectElement = event.target as HTMLSelectElement | null;
    if (selectElement && selectElement.value) {
      const selectedLang = selectElement.value;
      this.translate.use(selectedLang);
      localStorage.setItem('lang', selectedLang);
      this.currentLang = selectedLang;
    }
  }
}
