import {AfterViewInit, Component, ElementRef, inject, ViewChild} from '@angular/core';
import {SmoothScrollService} from '../../../shared/services/smooth-scroll.service';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {MENU_ITEMS} from '../../sections/menu/menu-mock';
import {MenuListInterface} from '../../../shared/types/menuList.interface';
import {MobileMenuService} from '../../../shared/services/mobile-menu.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {

  menuItems: MenuListInterface[] = MENU_ITEMS;

  smoothScrollService = inject(SmoothScrollService);
  mobileMenuService = inject(MobileMenuService);

  @ViewChild('mobileMenuContainer') mobileMenuContainer!: ElementRef;
  mobileMenuEl!: HTMLElement;

  ngAfterViewInit(): void {
    this.mobileMenuEl = this.mobileMenuContainer.nativeElement;
  }

  // toggleMobileMenu(): void {
  //   this.mobileMenuService.toggleMobileMenu();
  //   console.log(this.mobileMenuEl);
  //   console.log(this.mobileMenuService.isMobileMenuOpen);
  //   // if (this.mobileMenuEl) this.mobileMenuEl.style.transform = this.mobileMenuService.isMobileMenuOpen ? 'scaleY(1)' : 'scaleY(0)';
  //   if (this.mobileMenuEl) this.mobileMenuEl.style.display = this.mobileMenuService.isMobileMenuOpen ? 'none' : 'block';
  // }

  toggleMobileMenu(): void {
    this.mobileMenuService.toggleMobileMenu();
    if (this.mobileMenuEl) {
      this.mobileMenuEl.style.transform = this.mobileMenuService.isMobileMenuOpen ? 'scaleY(1)' : 'scaleY(0)';
    }

  }

  closeMobileMenu(sectionID: string): void {
    this.mobileMenuService.closeMobileMenu();
  }
}
