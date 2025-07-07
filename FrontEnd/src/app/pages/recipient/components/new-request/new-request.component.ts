import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RecipientService, BloodRequest } from '../../../../services/recipient.service';

@Component({
  selector: 'app-new-request',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule ,RouterModule],
  templateUrl: './new-request.component.html',
  styleUrl: './new-request.component.css'
})
export class NewRequestComponent {
  @Output() closeForm = new EventEmitter<void>();
  @Output() requestSubmitted = new EventEmitter<void>();
  bloodRequestForm: FormGroup;
  showConfirm = false;
  isSubmitting = false;
  submitError: string | null = null;
  submitSuccess = false;

  bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  urgencyLevels = [
    { value: 'LOW', label: 'Low' },
    { value: 'MEDIUM', label: 'Medium' },
    { value: 'HIGH', label: 'High' },
    { value: 'EMERGENCY', label: 'Emergency' }
  ];

  constructor(
    private fb: FormBuilder,
    private bloodRequestService: RecipientService,
    private router: Router
  ) {
    this.bloodRequestForm = this.fb.group({
      bloodGroup: ['', Validators.required],
      urgencyLevel: ['', Validators.required],
      hospitalName: ['', Validators.required],
      hospitalAddress: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      reason: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onCloseClick(): void {
    if (this.bloodRequestForm.dirty && !this.submitSuccess) {
      this.showConfirm = true;
    } else {
      this.closeForm.emit();
    }
  }

  onSubmit(): void {
    if (this.bloodRequestForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.submitError = null;

      const formValue = this.bloodRequestForm.value;
      
      // Prepare the request data according to your API format
      const bloodRequest: BloodRequest = {
        bloodGroup: formValue.bloodGroup,
        urgencyLevel: formValue.urgencyLevel,
        hospitalName: formValue.hospitalName,
        hospitalAddress: formValue.hospitalAddress,
        contactNumber: formValue.contactNumber,
        reason: formValue.reason,
        status: 'PENDING'
      };

      this.bloodRequestService.submitBloodRequest(bloodRequest).subscribe({
        next: (response) => {
          console.log(response);
          console.log('Blood request submitted successfully:', response);
          this.submitSuccess = true;
          this.isSubmitting = false;
          this.bloodRequestForm.reset();
          this.requestSubmitted.emit();

          setTimeout(() => {
            this.closeForm.emit();
          }, 2000);
        },
        error: (error) => {
          console.error('Error submitting blood request:', error);
          this.submitError = error.error?.message || 'Failed to submit request. Please try again.';
          this.isSubmitting = false;
        }
      });
    } else {
      this.bloodRequestForm.markAllAsTouched();
    }
  }


  getFormControl(fieldName: string) {
    return this.bloodRequestForm.get(fieldName);
  }


  hasError(fieldName: string, errorType: string): boolean {
    const control = this.getFormControl(fieldName);
    return control?.hasError(errorType) && control?.touched || false;
  }

  confirmClose(): void {
    this.closeForm.emit();
  }

  cancelClose(): void {
    this.showConfirm = false;
  }
}