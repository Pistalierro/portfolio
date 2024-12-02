import {Component, inject, OnInit} from '@angular/core';
import {DataService} from '../../../shared/services/data.service';
import {ProjectInterface} from '../../../shared/types/project.interface';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent implements OnInit {

  project!: ProjectInterface;

  dataService = inject(DataService);

  ngOnInit() {
    
  }
}
