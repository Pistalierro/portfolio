import {Component, inject} from '@angular/core';
import {NgIf} from '@angular/common';
import {ModalService} from '../../../shared/services/modal.service';

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

  isCertificateOpen: boolean = false;

  modalService = inject(ModalService);

  openCertificateModal(): void {
    this.isCertificateOpen = true;
  }

  closeCertificateModal(): void {
    this.isCertificateOpen = false;
  }
}
