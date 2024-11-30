import {Component, inject} from '@angular/core';
import {ModalService} from '../../../shared/services/modal.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  isModalOpen = false;

  modalService = inject(ModalService);

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
