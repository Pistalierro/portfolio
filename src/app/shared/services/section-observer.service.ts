// section-observer.service.ts
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {NavigationEnd, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SectionObserverService {
  private activeSectionSubject = new BehaviorSubject<string>('');
  activeSection$ = this.activeSectionSubject.asObservable();
  private observer: IntersectionObserver | null = null;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.activeSectionSubject.next('');
          this.observeSections();
        }, 0);
      }
    });
  }

  observeSections(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
      root: null,
      threshold: 0.5
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('id');
          this.activeSectionSubject.next(sectionId || '');
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      this.observer!.observe(section);
    });
  }
}
