import {Component, inject, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {SkillInterface} from '../../../shared/types/skills.interface';
import {DataService} from '../../../shared/services/data.service';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    NgForOf
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {

  skills$!: Observable<SkillInterface[]>;
  private dataService = inject(DataService);

  ngOnInit() {
    this.skills$ = this.dataService.getSkills();
  }
}
