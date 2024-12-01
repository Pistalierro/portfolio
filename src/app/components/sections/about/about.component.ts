import {Component, inject} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {ModalService} from '../../../shared/services/modal.service';
import {FADE_IN_LEFT_BOTTOM, FADE_IN_LEFT_TOP, FADE_IN_RIGHT_BOTTOM, FADE_IN_RIGHT_TOP} from '../../../shared/mock/animation';
import {InViewportDirective} from '../../../shared/directives/in-viewport.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, NgIf, InViewportDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations: [FADE_IN_LEFT_TOP, FADE_IN_RIGHT_TOP, FADE_IN_LEFT_BOTTOM, FADE_IN_RIGHT_BOTTOM]
})
export class AboutComponent {

  isCertificateOpen: boolean = false;
  modalService = inject(ModalService);

  blockStates: { [key: number]: 'hidden' | 'visible' } = {
    1: 'hidden',
    2: 'hidden',
    3: 'hidden',
    4: 'hidden'
  };

  openCertificateModal(): void {
    this.isCertificateOpen = true;
  }

  closeCertificateModal(): void {
    this.isCertificateOpen = false;
  }

  onInViewport(blockNumber: number, isVisible: boolean) {
    if (isVisible) {
      // Элемент вошёл в область видимости
      const delay = (blockNumber - 1) * 300;
      setTimeout(() => {
        this.blockStates[blockNumber] = 'visible';
      }, delay);
    } else {
      // Элемент вышел из области видимости
      this.blockStates[blockNumber] = 'hidden';
    }
  }
}
