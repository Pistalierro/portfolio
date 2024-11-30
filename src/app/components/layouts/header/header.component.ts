import {AfterViewInit, Component, ElementRef, inject, ViewChild} from '@angular/core';
import {SmoothScrollService} from '../../../shared/services/smooth-scroll.service';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {MenuListInterface} from '../../../shared/types/menuList.interface';
import {MobileMenuService} from '../../../shared/services/mobile-menu.service';
import {MENU_ITEMS} from '../../../shared/mock/menu-mock';

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

  toggleMobileMenu(): void {
    this.mobileMenuService.toggleMobileMenu();
    if (this.mobileMenuEl) this.mobileMenuEl.style.transform = this.mobileMenuService.isMobileMenuOpen ? 'scaleY(1)' : 'scaleY(0)';

  }

  closeMobileMenu(sectionID: string): void {
    this.mobileMenuService.closeMobileMenu();
    if (!this.mobileMenuService.isMobileMenuOpen && this.mobileMenuEl) {
      this.mobileMenuEl.style.transform = 'scaleY(0)';
      this.smoothScrollService.scrollToSection(sectionID);
    }
  }
}
