import {ResolveFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {DataService} from '../services/data.service';
import {catchError, map, Observable, of} from 'rxjs';
import {ProjectInterface} from '../types/project.interface';


export const projectDetailsResolver: ResolveFn<ProjectInterface | boolean> = (route): Observable<ProjectInterface | boolean> => {
  const dataService = inject(DataService);
  const router = inject(Router);

  const id = route.paramMap.get('id');
  console.log(id);

  if (id) {
    return dataService.getProjectById(id).pipe(
      map(project => {
        if (project) {
          return project;
        } else {
          console.warn('Project not found.');
          router.navigate(['/']).then();
          return false;
        }
      }),
      catchError((error) => {
        console.warn('Error fetching project data:', error);
        router.navigate(['/']).then();
        return of(false);
      })
    );
  }
  return of(false);
};
