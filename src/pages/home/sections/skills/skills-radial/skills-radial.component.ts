import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {SkillCategoryType, SkillInterface} from '../../../../../types/skills-interface';
import {SKILL_CATEGORIES, SKILLS} from '../../../../../data/skills';
import {ScrollTrackerService} from '../../../../../shared/services/scroll/scroll-tracker.service';
import {skillPopTrigger} from '../../../../../shared/animations/angular.animations';
import {TranslatePipe} from '@ngx-translate/core';
import {NgClass, NgForOf, NgIf, NgStyle} from '@angular/common';

@Component({
  selector: 'section-skills-radial',
  standalone: true,
  imports: [NgForOf, NgClass, NgIf, TranslatePipe, NgStyle],
  templateUrl: './skills-radial.component.html',
  styleUrl: './skills-radial.component.scss',
  animations: [skillPopTrigger]
})
export class SkillsRadialComponent implements OnInit, AfterViewInit, OnDestroy {
  categories: SkillCategoryType[] = SKILL_CATEGORIES;
  skills: SkillInterface[] = SKILLS;

  selectedCategory: SkillCategoryType = 'TECH.TABS.BASE';
  selectedSkill!: string;

  center = {x: 0, y: 0};
  radialLines: { x: number; y: number; length: number; currentOffset: number }[] = [];
  private lineAnimationFrameId: number | null = null;
  private readonly lineAnimationDurationMs = 360;
  private readonly lineAnimationDelayMs = 40;

  animatedSkillIndexes: number[] = [];
  hovered: boolean[] = [];
  linesReady: boolean = false;

  positionStyles: Record<number, any> = {};

  scrollTrackerService = inject(ScrollTrackerService);

  @Output() skillSelected = new EventEmitter<string>();

  @ViewChild('centerCircle') centerCircleRef!: ElementRef<HTMLDivElement>;
  @ViewChildren('skillCircle') skillCircleRefs!: QueryList<ElementRef<HTMLDivElement>>;

  private generatedLayouts: Record<string, { x: number; y: number }[]> = {};

  get filteredSkills(): SkillInterface[] {
    return this.skills.filter(s => s.category === this.selectedCategory);
  }

  get selectedCategoryForCircle(): string {
    return `${this.selectedCategory}_CIRCLE`;
  }

  ngOnInit() {
    this.scrollTrackerService.observeSectionsForAnimation(['skills-radial'], '', 0.3);
  }

  ngAfterViewInit(): void {
    this.onSelectCategory(this.selectedCategory);
  }

  ngOnDestroy(): void {
    this.stopLineAnimation();
  }


  onSelectCategory(category: SkillCategoryType) {
    this.selectedCategory = category;
    this.selectedSkill = '';
    this.radialLines = [];
    this.linesReady = false;
    this.stopLineAnimation();

    const skills = this.filteredSkills;
    if (!this.generatedLayouts[category]) {
      this.generatedLayouts[category] = this.generateRandomLayout(skills.length);
    }

    if (skills.length) {
      setTimeout(() => {
        this.selectedSkill = skills[0].name;
        this.skillSelected.emit(this.selectedSkill);
      });
    }

    this.animatedSkillIndexes = [];

    setTimeout(() => {
      this.positionStyles = {};
      skills.forEach((_, i) => {
        this.positionStyles[i] = this.getPositionStyle(i);
      });

      // Start line drawing in the same render cycle as skill bubble placement.
      this.calculateLines();
      this.linesReady = true;
      this.animateLines();
    });

    setTimeout(() => {
      this.animatedSkillIndexes = skills.map((_, i) => i);
    }, 20);

  }

  onSelectedSkill(skill: string) {
    this.selectedSkill = skill;
    this.skillSelected.emit(skill);
  }

  getPositionStyle(index: number): Record<string, string> {
    const pos = this.generatedLayouts[this.selectedCategory]?.[index];
    if (!pos) {
      return {'--x': '0px', '--y': '0px', transform: 'translate(0,0) scale(0.5)'};
    }
    return {
      '--x': `${pos.x}px`,
      '--y': `${pos.y}px`,
      transform: `translate(${pos.x}px,${pos.y}px) scale(1)`
    };
  }

  getScale(index: number): number {
    return this.animatedSkillIndexes.includes(index)
      ? this.hovered[index] ? 1.1 : 1
      : 0.5;
  }

  private generateRandomLayout(count: number): { x: number; y: number }[] {
    const result: { x: number; y: number }[] = [];
    const width = window.innerWidth;

    const radiusX = width < 768 ? 130 : 240;      // чуть шире — чтобы ушли от центра
    const radiusY = width < 768 ? 100 : 130;      // не сплюснутые по вертикали
    const minCenter = width < 768 ? 100 : 120;    // отступ от центра (чтобы не липли)
    const minDist = width < 768 ? 90 : 120;       // чтобы кружки не пересекались


    let tries = 0;
    while (result.length < count && tries < 5000) {
      tries++;
      const angle = Math.random() * 2 * Math.PI;
      const x = Math.round(Math.cos(angle) * Math.random() * radiusX);
      const y = Math.round(Math.sin(angle) * Math.random() * radiusY);
      if (Math.hypot(x, y) < minCenter) continue;
      if (result.every(p => Math.hypot(p.x - x, p.y - y) >= minDist)) {
        result.push({x, y});
      }
    }
    return result;
  }

  private calculateLines(): void {
    if (!this.centerCircleRef) return;

    const parentRect = this.centerCircleRef.nativeElement.offsetParent!
      .getBoundingClientRect();
    const centerRect = this.centerCircleRef.nativeElement.getBoundingClientRect();

    this.center = {
      x: centerRect.left + centerRect.width / 2 - parentRect.left,
      y: centerRect.top + centerRect.height / 2 - parentRect.top
    };
    this.radialLines = this.generatedLayouts[this.selectedCategory]
      .map(p => {
        const x = this.center.x + p.x;
        const y = this.center.y + p.y;
        const length = Math.hypot(x - this.center.x, y - this.center.y);

        return {
          x,
          y,
          length,
          currentOffset: length
        };
      });
  }

  private animateLines(): void {
    this.stopLineAnimation();

    const start = performance.now();

    const animateStep = (now: number) => {
      const elapsed = now - start - this.lineAnimationDelayMs;
      const progress = Math.min(Math.max(elapsed / this.lineAnimationDurationMs, 0), 1);
      // Softer easing so line growth does not outrun skill bubble pop.
      const eased = 1 - Math.pow(1 - progress, 2);
      const remaining = 1 - eased;

      this.radialLines.forEach(line => {
        line.currentOffset = line.length * remaining;
      });

      if (progress < 1) {
        this.lineAnimationFrameId = requestAnimationFrame(animateStep);
      } else {
        this.lineAnimationFrameId = null;
      }
    };

    this.lineAnimationFrameId = requestAnimationFrame(animateStep);
  }

  private stopLineAnimation(): void {
    if (this.lineAnimationFrameId !== null) {
      cancelAnimationFrame(this.lineAnimationFrameId);
      this.lineAnimationFrameId = null;
    }
  }

}
