import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.css'],
})
export class WhatsappComponent {
  darkMode: boolean = false;

  constructor() {
    const saved = localStorage.getItem('theme');
    this.darkMode = saved === 'dark';
    this.applyTheme();
  }

  toggleTheme() {
    this.darkMode = !this.darkMode;
    const theme = this.darkMode ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    this.applyTheme();
  }

  applyTheme() {
    document.documentElement.classList.toggle('dark', this.darkMode);
  }
}
