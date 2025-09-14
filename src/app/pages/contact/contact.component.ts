import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeToggleComponent } from '../../shared/theme-toggle/theme-toggle.component';
import { WhatsappComponent } from '../../shared/whatsapp/whatsapp.component';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Importa tus modales
import { ModalSuccessComponent } from '../../shared/modals/modal-success/modal-success.component';
import { ModalDangerComponent } from '../../shared/modals/modal-danger/modal-danger.component';
import { ModalWarningComponent } from '../../shared/modals/modal-warning/modal-warning.component';

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
    ModalSuccessComponent,
    ModalDangerComponent,
    ModalWarningComponent,
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
  showSuccessModal = false;
  showErrorModal = false;
  showWarningModal = false;

  constructor(private http: HttpClient) {}

  submitForm() {
    // Validación previa antes de enviar
    if (!this.contact.name || !this.contact.email || !this.contact.message) {
      this.showWarningModal = true;
      return;
    }

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
}
