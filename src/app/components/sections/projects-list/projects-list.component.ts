import {Component, inject, OnInit} from '@angular/core';
import {DataService} from '../../../shared/services/data.service';
import {map, Observable} from 'rxjs';
import {ProjectInterface} from '../../../shared/types/project.interface';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {FADE_IN_BOTTOM} from '../../../shared/mock/animation';
import {InViewportDirective} from '../../../shared/directives/in-viewport.directive';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    NgForOf,
    RouterLink,
    InViewportDirective
  ],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss',
  animations: [FADE_IN_BOTTOM]
})
export class ProjectsListComponent implements OnInit {

  projectList$!: Observable<ProjectInterface[]>;
  private dataService = inject(DataService);

  ngOnInit() {
    this.projectList$ = this.dataService.getProjectList().pipe(
      map(projectList => {
        return projectList.map(((project, index) => {
          return {...project, blockStates: {[index + 1]: 'hidden'}};
        }));
      })
    );
    this.dataService.getProjectList().subscribe(console.log);
  }

  onInViewport(project: ProjectInterface, blockNumber: number, isVisible: boolean) {
    if (isVisible) {
      // Элемент вошёл в область видимости
      const delay = (blockNumber - 1) * 300;
      setTimeout(() => {
        if (project.blockStates) {
          project.blockStates[blockNumber] = 'visible';
        }
      }, delay);
    } else {
      // Элемент вышел из области видимости
      if (project.blockStates) {
        project.blockStates[blockNumber] = 'hidden';
      }
    }
  }
}
