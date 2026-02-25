import {AfterViewChecked, Component, HostListener, inject} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {ContactsModalService} from '../../../../../shared/services/contacts-modal.service';
import {ScrollTrackerService} from '../../../../../shared/services/scroll/scroll-tracker.service';
import {ReactiveFormsModule} from '@angular/forms';
import {ContactsFormComponent} from '../contacts-form/contacts-form.component';
import {ContactsInfoComponent} from '../contacts-info/contacts-info.component';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-contacts-modal',
  standalone: true,
  imports: [NgClass, NgIf, ReactiveFormsModule, ContactsFormComponent, ContactsInfoComponent, TranslatePipe],
  templateUrl: './contacts-modal.component.html',
  styleUrl: './contacts-modal.component.scss',
})
export class ContactsModalComponent implements AfterViewChecked {

  contactsModalService = inject(ContactsModalService);
  private scrollTrackerService = inject(ScrollTrackerService);

  private wasTriggered = false;

  @HostListener('document:keydown.escape', ['$event'])
  onEsc(event: KeyboardEvent): void {
    this.contactsModalService.close();
  }

  ngAfterViewChecked(): void {
    const isOpen = this.contactsModalService.isOpen();
    const isVisible = this.contactsModalService.isVisible();

    if (isOpen && !this.wasTriggered) {
      this.scrollTrackerService.triggerAnimationsIn('#contacts-modal');
      this.wasTriggered = true;
    } else if (!isOpen && isVisible && this.wasTriggered) {
      this.scrollTrackerService.triggerAnimationsIn('#contacts-modal');
      this.wasTriggered = false;
    }
  }
}
