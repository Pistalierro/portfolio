import {Component, HostListener, inject, OnInit} from '@angular/core';
import {HeaderComponent} from './components/layouts/header/header.component';
import {AboutComponent} from './components/sections/about/about.component';
import {ProjectsListComponent} from './components/sections/projects-list/projects-list.component';
import {MenuComponent} from './components/sections/menu/menu.component';
import {SkillsComponent} from './components/sections/skills/skills.component';
import {ContactsComponent} from './components/sections/contacts/contacts.component';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {filter} from 'rxjs';
import {NgIf} from '@angular/common';
import {FooterComponent} from './components/layouts/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    AboutComponent,
    ProjectsListComponent,
    MenuComponent,
    SkillsComponent,
    ContactsComponent,
    RouterOutlet,
    NgIf,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  showMenu: boolean = false;
  isProjectDetailsPage: boolean = false;
  private router = inject(Router);

  @HostListener('window:scroll', ['$event'])


  onWindowScroll() {
    const header = document.getElementById('header');
    const headerHeight = header ? header.offsetHeight : 0;
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || 0;
    const viewportHeight = window.innerHeight;
    const threshold = Math.max(headerHeight - (0.3 * viewportHeight), 0);
    this.showMenu = scrollPosition > threshold;
  }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        this.isProjectDetailsPage = event.urlAfterRedirects.startsWith('/projectList/');
        this.onWindowScroll();
      });
    this.onWindowScroll();
  }
}
