import {inject, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ModalService} from './modal.service';

@Injectable({
  providedIn: 'root'
})
export class SmoothScrollService {

  private router = inject(Router);
  private modalService = inject(ModalService);

  scrollToSection(sectionID: string): void {
    if (this.router.url !== '/') {
      // Если текущий маршрут не корневой, переходим на главную страницу
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.scrollToElement(sectionID, false);
        }, 0);
      });
    } else {
      // Если уже на главной странице, прокручиваем сразу
      this.scrollToElement(sectionID, true);
    }
  }

  onMenuItemClick(item: any): void {
    if (item.action === 'scroll') {
      this.scrollToSection(item.sectionID);
    } else if (item.action === 'modal') {
      this.modalService.isModalOpen = true;
    }
  }

  private scrollToElement(sectionID: string, smooth: boolean): void {
    const section = document.getElementById(sectionID);
    if (section) {
      section.scrollIntoView({
        behavior: smooth ? 'smooth' : 'auto',
        block: 'start'
      });
    }
  }
}
