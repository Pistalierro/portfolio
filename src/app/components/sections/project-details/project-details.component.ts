import {Component, inject, OnInit} from '@angular/core';
import {ProjectInterface} from '../../../shared/types/project.interface';
import {ActivatedRoute} from '@angular/router';
import {map, Observable} from 'rxjs';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    NgForOf
  ],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent implements OnInit {

  project$!: Observable<ProjectInterface>;

  activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.project$ = this.activatedRoute.data.pipe(
      map((data) => data['project'] as ProjectInterface)
    );
  }
}
