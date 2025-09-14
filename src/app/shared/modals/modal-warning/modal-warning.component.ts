import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-warning',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-warning.component.html',
  styleUrls: ['./modal-warning.component.css'],
})
export class ModalWarningComponent {
  @Input() title: string = 'Advertencia';
  @Input() message: string | { [key: string]: string } = 'Algo importante que debes saber.';
  @Input() visible: boolean = false;

  @Output() closed = new EventEmitter<void>();

  close() {
    this.closed.emit();
  }

  isObject(value: any): boolean {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
  }

  get messageEntries(): [string, string][] {
    return this.isObject(this.message) ? Object.entries(this.message as { [key: string]: string }) : [];
  }
}
