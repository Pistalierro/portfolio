import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  isModalOpen = false;

  toggleModal(sectionID: string): void {
    if (sectionID === 'contacts') {
      this.isModalOpen = !this.isModalOpen;
    }
  }

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
