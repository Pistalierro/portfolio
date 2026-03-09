import {AfterViewInit, Component, inject, OnInit} from '@angular/core';
import {ProjectDetailedInterface} from '../../../types/projects.interface';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';
import {ScrollTrackerService} from '../../../shared/services/scroll/scroll-tracker.service';

@Component({
  selector: 'app-project-details',
  imports: [
    NgForOf,
    TranslatePipe,
    NgIf,
    RouterLink
  ],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent implements OnInit, AfterViewInit {

  project!: ProjectDetailedInterface;
  scrollTrackerService = inject(ScrollTrackerService);
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.project = this.activatedRoute.snapshot.data['project'];
    window.scrollTo({top: 0, behavior: 'auto'});
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.scrollTrackerService.observeAnimatedElements();
    }, 100);
  }
}
