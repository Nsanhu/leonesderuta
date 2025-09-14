import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeToggleComponent } from '../../shared/theme-toggle/theme-toggle.component';
import { WhatsappComponent } from '../../shared/whatsapp/whatsapp.component';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { FormsModule } from '@angular/forms'; // 👈 IMPORTANTE
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    ThemeToggleComponent,
    WhatsappComponent,
    PageHeaderComponent,
    FormsModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: '',
  };

  success = false;

  constructor(private http: HttpClient) {}

  showSuccessModal = false;
  showErrorModal = false;

  submitForm() {
    const formUrl = 'https://formspree.io/f/xwpnzdrz'; // tu URL real

    this.http.post(formUrl, this.contact).subscribe({
      next: () => {
        this.showSuccessModal = true;
        this.contact = { name: '', email: '', message: '' };
      },
      error: (err) => {
        this.showErrorModal = true;
        console.error('Error al enviar:', err);
      },
    });
  }
  closeModal() {
    this.showSuccessModal = false;
    this.showErrorModal = false;
  }
}
