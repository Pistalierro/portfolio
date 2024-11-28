import {Component, HostListener} from '@angular/core';
import {HeaderComponent} from './components/layouts/header/header.component';
import {AboutComponent} from './components/sections/about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    AboutComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  showMenu: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const header = document.getElementById('header');
    const headerHeight = header ? header.offsetHeight : 0;
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || 0;
    const viewportHeight = window.innerHeight;
    this.showMenu = scrollPosition > headerHeight - (0.3 * viewportHeight);
  }
}
