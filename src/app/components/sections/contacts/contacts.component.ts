import {Component, inject} from '@angular/core';
import {NgIf} from '@angular/common';
import {ModalService} from '../../../shared/services/modal.service';
import {MenuListInterface} from '../../../shared/types/menuList.interface';
import {SmoothScrollService} from '../../../shared/services/smooth-scroll.service';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

  modalService = inject(ModalService);
  smoothScrollService = inject(SmoothScrollService);

  onMenuItemClick(item: MenuListInterface): void {
    if (item.action === 'scroll') {
      this.smoothScrollService.scrollToSection(item.sectionID);
    } else if (item.action === 'modal') {
      this.modalService.isModalOpen = true;
    }
  }
}
