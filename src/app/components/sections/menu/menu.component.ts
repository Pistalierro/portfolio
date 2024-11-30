import {Component, ElementRef, inject, Input, ViewChild} from '@angular/core';
import {MenuListInterface} from '../../../shared/types/menuList.interface';
import {SmoothScrollService} from '../../../shared/services/smooth-scroll.service';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {MobileMenuService} from '../../../shared/services/mobile-menu.service';
import {MENU_ITEMS} from '../../../shared/mock/menu-mock';
import {SLIDE_DOWN} from '../../../shared/mock/animation';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgClass
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  animations: [SLIDE_DOWN]
})
export class MenuComponent {
  isMobileMenuOpen: boolean = false;

  menuItems: MenuListInterface[] = MENU_ITEMS;

  smoothScrollService = inject(SmoothScrollService);
  mobileMenuService = inject(MobileMenuService);

  @Input() isMenuVisible: boolean = false;
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
