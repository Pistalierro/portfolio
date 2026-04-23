import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {ProjectPreviewInterface} from '../../../../types/projects.interface';
import {PROJECTS} from '../../../../data/projects';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {TypewriterService} from '../../../../shared/services/typewriter.service';
import {TranslatePipe} from '@ngx-translate/core';
import {CarouselService} from '../../../../shared/services/carousel.service';
import {ScrollTrackerService} from '../../../../shared/services/scroll/scroll-tracker.service';

@Component({
  selector: 'section-portfolio',
  standalone: true,
  imports: [NgForOf, NgIf, NgClass, RouterLink, TranslatePipe],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements AfterViewInit, OnDestroy {

  projectPreviews = PROJECTS.map(project => ({...project} as ProjectPreviewInterface));

  readonly SLIDES_LENGTH = PROJECTS.length;

  isFirstLoad = true;
  infoVisible = true;

  typedLetterIndex = -1;
  jsonLetters: { char: string; delay: number; letterIndexGlobal: number }[] = [];

  @ViewChild('thumbsContainer', {static: true}) thumbsContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('jsonContainer') jsonContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('carouselImageWrapper', {static: false}) carouselImageWrapper!: ElementRef<HTMLDivElement>;
  @ViewChildren('thumb') thumbs!: QueryList<ElementRef<HTMLDivElement>>;

  typewriterService = inject(TypewriterService);
  carouselService = inject(CarouselService);
  private cdr = inject(ChangeDetectorRef);
  private scrollTrackerService = inject(ScrollTrackerService);

  get activeSlide(): number {
    return this.carouselService.activeSlide;
  }

  get slideDirection(): '' | 'left' | 'right' {
    return this.carouselService.slideDirection;
  }

  get typedJson(): string {
    return this.jsonLetters
      .slice(0, this.typedLetterIndex + 1)
      .map(l => l.char)
      .join('');
  }

  ngAfterViewInit(): void {
    this.initCarousel();
  }

  ngOnDestroy() {
    this.carouselService.pauseCarousel();
    this.carouselService.removeListeners(this.carouselImageWrapper.nativeElement);
  }

  toggleCarousel() {
    this.carouselService.toggleCarousel();
  }

  nextSlide() {
    this.carouselService.nextSlide();
  }

  prevSlide() {
    this.carouselService.prevSlide();
  }

  setActiveSlide(index: number) {
    this.carouselService.setActiveSlide(index);
  }

  getPreviewTitle(project: ProjectPreviewInterface): string {
    return project.shortTitle || project.title;
  }

  private initCarousel(): void {
    this.carouselService.init(this.SLIDES_LENGTH, (index, direction) => {
      this.infoVisible = false;

      setTimeout(() => {
        this.infoVisible = true;
        this.scrollTrackerService.triggerAnimationsIn('.portfolio__info-container');
        this.scrollToActiveThumbnail();
        this.initJsonTyping(this.projectPreviews[index]);
        this.cdr.detectChanges();
      }, 10);
    });

    this.carouselService.playCarousel();

    setTimeout(() => {
      this.isFirstLoad = false;
    }, 100);

    setTimeout(() => this.scrollToActiveThumbnail(), 0);

    this.cdr.detectChanges();
    setTimeout(() => {
      this.initJsonTyping(this.projectPreviews[this.activeSlide]);
    }, 0);

    this.carouselService.initListeners(this.carouselImageWrapper.nativeElement);
  }

  private initJsonTyping(project: ProjectPreviewInterface): void {
    const jsonStr = JSON.stringify(project, null, 2);
    let index = 0;

    this.jsonLetters = jsonStr.split('').map((char) => ({
      char,
      delay: index * 0.01,
      letterIndexGlobal: index++
    }));

    this.typedLetterIndex = -1;

    this.typewriterService.observeTyping(
      this.jsonLetters,
      (currentIndex) => {
        this.typedLetterIndex = currentIndex;
        this.cdr.detectChanges();
        this.scrollJsonToBottom();
      }
    );
  }

  private scrollToActiveThumbnail() {
    const container = this.thumbsContainer?.nativeElement;
    const activeThumb = this.thumbs?.get(this.activeSlide)?.nativeElement;

    if (container && activeThumb) {
      const isMobile = window.innerWidth < 1024;

      if (isMobile) {
        const containerWidth = container.clientWidth;
        const thumbOffsetLeft = activeThumb.offsetLeft;
        const thumbWidth = activeThumb.clientWidth;
        const scrollTo = thumbOffsetLeft - containerWidth / 2 + thumbWidth / 2;

        container.scrollTo({left: scrollTo, behavior: 'smooth'});
      } else {
        const containerHeight = container.clientHeight;
        const thumbOffsetTop = activeThumb.offsetTop;
        const thumbHeight = activeThumb.clientHeight;
        const scrollTo = thumbOffsetTop - containerHeight / 2 + thumbHeight / 2;

        container.scrollTo({top: scrollTo, behavior: 'smooth'});
      }
    }
  }

  private scrollJsonToBottom() {
    const el = this.jsonContainer?.nativeElement;
    if (el) el.scrollTop = el.scrollHeight;
  }
}
