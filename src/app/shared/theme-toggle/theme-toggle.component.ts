import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.css'],
})
export class ThemeToggleComponent {
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
