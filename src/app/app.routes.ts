import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {projectDetailsResolver} from './shared/resolvers/project-details.resolver';

export const routes: Routes = [
  {path: '', component: AppComponent},
  {
    path: 'projectList/:id',
    loadComponent: () => import('./components/sections/project-details/project-details.component')
      .then(m => m.ProjectDetailsComponent),
    resolve: {project: projectDetailsResolver}
  }
];
