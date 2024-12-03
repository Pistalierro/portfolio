import {Component, inject, OnInit} from '@angular/core';
import {map, Observable} from 'rxjs';
import {SkillInterface} from '../../../shared/types/skills.interface';
import {DataService} from '../../../shared/services/data.service';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {FADE_IN_RIGHT_BOTTOM} from '../../../shared/mock/animation';
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
  animations: [FADE_IN_RIGHT_BOTTOM]
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
    this.skills$.subscribe(skills => console.log(skills));
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
