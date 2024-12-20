import {Component, inject, OnInit} from '@angular/core';
import {map, Observable} from 'rxjs';
import {SkillInterface} from '../../../shared/types/skills.interface';
import {DataService} from '../../../shared/services/data.service';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {BOUNCE_IN, FADE_IN_RIGHT_BOTTOM, POP_IN_SKEW, ZOOM_IN_ROTATE} from '../../../shared/mock/animation';
import {InViewportDirective} from '../../../shared/directives/in-viewport.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    NgForOf,
    InViewportDirective
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  animations: [FADE_IN_RIGHT_BOTTOM, ZOOM_IN_ROTATE, POP_IN_SKEW, BOUNCE_IN]
})
export class SkillsComponent implements OnInit {

  skills$!: Observable<SkillInterface[]>;
  private dataService = inject(DataService);

  ngOnInit() {
    this.skills$ = this.dataService.getSkills().pipe(
      map(skills => {
        return skills.map(((item, index) => {
          return {...item, blockStates: {[index + 1]: 'hidden'}};
        }));
      })
    );
  }

  onInViewport(skill: SkillInterface, blockNumber: number, isVisible: boolean) {
    if (isVisible) {
      // Элемент вошёл в область видимости
      const delay = (blockNumber - 1) * 300;
      setTimeout(() => {
        if (skill.blockStates) {
          skill.blockStates[blockNumber] = 'visible';
        }
      }, delay);
    } else {
      // Элемент вышел из области видимости
      if (skill.blockStates) {
        skill.blockStates[blockNumber] = 'hidden';
      }
    }
  }
}
