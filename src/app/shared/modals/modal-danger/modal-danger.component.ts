import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-danger',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-danger.component.html',
  styleUrls: ['./modal-danger.component.css'],
})
export class ModalDangerComponent {
  @Input() title: string = '¡Error!';
  @Input() message: string | { [key: string]: string } = 'Ha ocurrido un error.';
  @Input() visible: boolean = false;

  @Output() closed = new EventEmitter<void>();

  close() {
    this.closed.emit();
  }

  isObject(msg: any): boolean {
    return typeof msg === 'object' && msg !== null && !Array.isArray(msg);
  }

  get messageEntries(): [string, string][] {
    return this.isObject(this.message) ? Object.entries(this.message as { [key: string]: string }) : [];
  }
}
