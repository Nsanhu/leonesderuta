import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ThemeToggleComponent } from '../../shared/theme-toggle/theme-toggle.component';
import { WhatsappComponent } from '../../shared/whatsapp/whatsapp.component';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, ThemeToggleComponent, WhatsappComponent, PageHeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  getIcon(index: number): string {
    const icons = ['adventure.png', 'sustainability.png', 'service.png', 'culture.png'];
    return icons[index] || 'default.png';
  }
}
