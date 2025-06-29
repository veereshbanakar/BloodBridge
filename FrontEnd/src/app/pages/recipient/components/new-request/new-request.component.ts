import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-request',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-request.component.html',
  styleUrl: './new-request.component.css'
})
export class NewRequestComponent {
  @Output() closeForm = new EventEmitter<void>();
  showConfirm = false; 
  onCloseClick(): void {
    this.showConfirm = true;
  }

  // Called when user confirms
  confirmClose(): void {
    this.closeForm.emit();
  }

  // Called when user cancels
  cancelClose(): void {
    this.showConfirm = false;
  }
}
