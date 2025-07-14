import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, TranslateModule, FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    // Idiomas soportados
    translate.addLangs(['es', 'pt', 'en']);

    // Idioma por defecto
    translate.setDefaultLang('es');

    // Detecta el idioma del navegador
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/es|pt|en/) ? browserLang : 'es');
  }
}
