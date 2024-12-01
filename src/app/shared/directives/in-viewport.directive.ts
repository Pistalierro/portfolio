import {AfterViewInit, Directive, ElementRef, EventEmitter, inject, OnDestroy, Output} from '@angular/core';

@Directive({
  selector: '[appInViewport]',
  standalone: true,
  exportAs: 'appInViewport'
})
export class InViewportDirective implements OnDestroy, AfterViewInit {

  @Output() inViewport: EventEmitter<void> = new EventEmitter();
  private observer!: IntersectionObserver;
  private element = inject(ElementRef);

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.inViewport.emit();
          this.observer.unobserve(this.element.nativeElement);
        }
      });
    }, {
      threshold: 0.1
    });
    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) this.observer.disconnect();
  }
}
