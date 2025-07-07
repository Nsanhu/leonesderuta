import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-success',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-success.component.html',
  styleUrl: './modal-success.component.css',
})
export class ModalSuccessComponent implements OnChanges {
  @Input() title: string = '¡Éxito!';
  @Input() message: any = 'Operación exitosa';
  @Input() visible: boolean = false;

  messageEntries: [string, any][] = [];

  ngOnChanges(): void {
    if (this.isObject(this.message)) {
      if (this.message.status === true && this.message.data) {
        // Mostrar los datos del "data"
        this.messageEntries = Object.entries(this.message.data);
      } else {
        // Si es otro tipo de objeto, como errores
        this.messageEntries = Object.entries(this.message);
      }
    }
  }

  isObject(value: any): boolean {
    return value && typeof value === 'object' && !Array.isArray(value);
  }

  @Output() close = new EventEmitter<void>();

  closeModalSuccess() {
    this.visible = false;
    this.close.emit();
  }
}
