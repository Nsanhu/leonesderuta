import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css'],
})
export class PageHeaderComponent {
  @Input() backgroundImage: string = '/img/bg_default.jpg';
  @Input() titleKey: string = '';
  @Input() subtitleKey?: string;
  @Input() showButton: boolean = false;
  @Input() buttonTextKey: string = 'HOME.CONTACT_US';
  @Input() buttonLink: string = '/contact';
  @Input() large: boolean = false; // si es true = es para el home
}
