import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'Bienvenido a la página Home';
  tours = [
    { title: 'Valle Nevado', desc: 'Disfruta de la nieve en un tour a la cordillera', img: 'assets/valle-nevado.jpg' },
    { title: 'Termas de Colina', desc: 'Relájate en aguas termales naturales', img: 'assets/termas-colina.jpg' },
    { title: 'Viñedo Maipo', desc: 'Aprende de vino y disfruta degustaciones', img: 'assets/vinedo-maipo.jpg' },
  ];
}
