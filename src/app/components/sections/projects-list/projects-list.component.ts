import {Component, inject, OnInit} from '@angular/core';
import {DataService} from '../../../shared/services/data.service';
import {Observable} from 'rxjs';
import {ProjectInterface} from '../../../shared/types/project.interface';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    NgForOf,
    RouterLink
  ],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss',
})
export class ProjectsListComponent implements OnInit {

  projectList$!: Observable<ProjectInterface[]>;
  private dataService = inject(DataService);

  ngOnInit() {
    this.projectList$ = this.dataService.getProjectList();
  }
}
