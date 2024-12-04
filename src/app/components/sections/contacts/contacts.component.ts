import {Component, inject} from '@angular/core';
import {ModalService} from '../../../shared/services/modal.service';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DataService} from '../../../shared/services/data.service';
import {FeedbackInterface} from '../../../shared/types/feedback.interface';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    NgIf,
    FormsModule
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

  email: string = 'pistalierro@gmail.com';

  formData: FeedbackInterface = {
    name: '',
    email: '',
    message: ''
  };
  public modalService = inject(ModalService);
  private dataService = inject(DataService);

  onSubmit() {
    this.dataService.addFeedbackMessages(this.formData).subscribe({
      next: () => console.log('Message sent successfully'),
      error: (err: any) => console.log('Error sending message:', err)
    });
    this.modalService.toggleModal('contacts');
  }
}
