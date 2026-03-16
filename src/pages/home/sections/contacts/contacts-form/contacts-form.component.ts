import {Component, inject, OnInit, signal} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ScrollTrackerService} from '../../../../../shared/services/scroll/scroll-tracker.service';
import emailjs from '@emailjs/browser';
import {customEmailValidator} from '../../../../../shared/utils/custom-email-validator.helpers';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {NgClass, NgIf} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'form-contacts',
  imports: [
    CdkTextareaAutosize,
    NgIf,
    ReactiveFormsModule,
    NgClass,
    TranslatePipe
  ],
  templateUrl: './contacts-form.component.html',
  styleUrl: './contacts-form.component.scss'
})
export class ContactsFormComponent implements OnInit {

  contactsForm!: FormGroup;
  isMobile = window.innerWidth <= 768;

  readonly enabledButtonClasses = `text-white bg-gradient-to-r from-white/20 to-white/30 hover:from-white/30 hover:to-white/40 hover:shadow-whiteGlow hover:border-white hover:scale-105 border-white/50`;

  readonly disabledButtonClasses = `bg-white/10 text-white opacity-20 cursor-not-allowed border border-white/10 shadow-none hover:shadow-none hover:border-white/10`;

  isSubmitting = signal<boolean>(false);
  isSuccess = signal<boolean>(false);

  private scrollTrackerService = inject(ScrollTrackerService);
  private fb = inject(FormBuilder);

  ngOnInit() {
    this.initializeForm();
  }

  onSubmit(): void {
    if (this.contactsForm.invalid || this.isSubmitting()) return;

    this.isSubmitting.set(true);

    const formData = this.contactsForm.value;

    emailjs.send(
      'service_7ti8nfh',     // ← твой Service ID
      'template_tpbpu7a',     // ← сюда свой Template ID
      {
        name: formData.name,
        email: formData.email,
        message: formData.message
      },
      'zmKTrLdpy1Hipg_o1'      // ← сюда твой Public Key
    ).then(() => {
      this.contactsForm.reset();
      this.isSuccess.set(true);
      this.isSubmitting.set(false);

      setTimeout(() => this.isSuccess.set(false), 3000);
    }).catch(error => {
      console.error('Ошибка при отправке письма:', error);
      this.isSubmitting.set(false);
    }).finally(() => this.isSubmitting.set(false));
  }

  getErrorMessage(field: string): string | null {
    const control = this.contactsForm.get(field);
    if (!control || (!control.dirty && !control.touched)) return null;

    if (control.valid) return null;

    if (field === 'message') return null;

    const messages: Record<string, string> = {
      required: 'MODAL.FORM.ERRORS.required',
      minlength: 'MODAL.FORM.ERRORS.minlength',
      maxlength: 'MODAL.FORM.ERRORS.maxlength',
      invalidEmail: 'MODAL.FORM.ERRORS.invalidEmail',
    };

    const errorKey = Object.keys(control.errors || {})[0];
    return messages[errorKey] || null;
  }

  private initializeForm(): void {
    this.contactsForm = this.fb.group({
      name: this.fb.control('', {
        validators: [Validators.required, Validators.minLength(4), Validators.maxLength(25)],
        updateOn: 'change',
      }),
      email: this.fb.control('', {
        validators: [Validators.required, customEmailValidator],
        updateOn: 'change',
      }),
      message: this.fb.control('', {
        validators: [],
        updateOn: 'change',
      }),
    });

  }
}
