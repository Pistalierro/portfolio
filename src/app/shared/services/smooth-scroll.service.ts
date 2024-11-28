import {inject, Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SmoothScrollService {

  private router = inject(Router);

  scrollToSection(sectionId: string): void {
    if (this.router.url !== '/') {
      // Если текущий маршрут не корневой, переходим на главную страницу
      this.router.navigate(['/']).then(() => {
        this.scrollToElement(sectionId);
      });
    } else {
      // Если уже на главной странице, прокручиваем сразу
      this.scrollToElement(sectionId);
    }
  }

  private scrollToElement(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }
}
