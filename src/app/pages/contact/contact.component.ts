import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeToggleComponent } from '../../shared/theme-toggle/theme-toggle.component';
import { WhatsappComponent } from '../../shared/whatsapp/whatsapp.component';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RecaptchaModule } from 'ng-recaptcha';

// Modales personalizados
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
    RecaptchaModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  // Datos del formulario
  contact = {
    name: '',
    email: '',
    message: '',
  };

  // Estado del reCAPTCHA
  captchaToken: string = '';

  // Modales
  showSuccessModal = false;
  successTitle = '¡Mensaje enviado!';
  successMessage = 'Gracias por contactarnos. Te responderemos pronto.';

  showErrorModal = false;
  errorTitle = 'Error al enviar';
  errorMessage = 'Ocurrió un problema al enviar tu mensaje. Intenta nuevamente.';

  showWarningModal = false;
  warningTitle = 'Campos incompletos';
  warningMessage = 'Por favor, completa todos los campos y verifica que no eres un robot.';

  constructor(private http: HttpClient) {}

  // Resolver reCAPTCHA
  onCaptchaResolved(token: string | null) {
    this.captchaToken = token || '';
  }

  // Enviar formulario
  submitForm() {
    // Validación: reCAPTCHA
    if (!this.captchaToken) {
      this.warningTitle = 'Verificación requerida';
      this.warningMessage = 'Por favor, verifica que no eres un robot.';
      this.showWarningModal = true;
      return;
    }

    // Validación: campos vacíos
    const { name, email, message } = this.contact;
    if (!name || !email || !message) {
      this.warningTitle = 'Campos incompletos';
      this.warningMessage = 'Debes completar todos los campos.';
      this.showWarningModal = true;
      return;
    }

    // Enviar formulario
    const formUrl = 'https://formspree.io/f/xwpnzdrz';

    this.http.post(formUrl, this.contact).subscribe({
      next: () => {
        this.showSuccessModal = true;
        this.contact = { name: '', email: '', message: '' };
        this.captchaToken = ''; // Limpiar captcha después del envío
      },
      error: (err) => {
        this.showErrorModal = true;
        console.error('Error al enviar:', err);
      },
    });
  }

  // Cerrar todos los modales
  closeModal() {
    this.showSuccessModal = false;
    this.showErrorModal = false;
    this.showWarningModal = false;
  }
}
