import {AfterViewInit, Component, ElementRef, inject, Input, ViewChild} from '@angular/core';
import {MenuListInterface} from '../../../shared/types/menuList.interface';
import {SmoothScrollService} from '../../../shared/services/smooth-scroll.service';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {MobileMenuService} from '../../../shared/services/mobile-menu.service';
import {MENU_ITEMS} from '../../../shared/mock/menu-mock';
import {SLIDE_DOWN} from '../../../shared/mock/animation';
import {ModalService} from '../../../shared/services/modal.service';
import {SectionObserverService} from '../../../shared/services/section-observer.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgForOf, NgIf, NgClass],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  animations: [SLIDE_DOWN]
})
export class MenuComponent implements AfterViewInit {

  menuItems: MenuListInterface[] = MENU_ITEMS;
  activeSection: string = '';
  smoothScrollService = inject(SmoothScrollService);
  mobileMenuService = inject(MobileMenuService);
  modalService = inject(ModalService);
  mobileMenuEl!: HTMLElement;
  @Input() isMenuVisible: boolean = false;
  @ViewChild('mobileMenuContainer') mobileMenuContainer!: ElementRef;
  private sectionObserverService = inject(SectionObserverService);

  ngAfterViewInit(): void {
    this.mobileMenuEl = this.mobileMenuContainer.nativeElement;
    this.sectionObserverService.observeSections();
    this.sectionObserverService.activeSection$.subscribe(res => this.activeSection = res);
  }

  toggleMobileMenu(): void {
    this.mobileMenuService.toggleMobileMenu();
    if (this.mobileMenuEl) this.mobileMenuEl.style.transform = this.mobileMenuService.isMobileMenuOpen ? 'scaleY(1)' : 'scaleY(0)';

  }

  closeMobileMenu(sectionID: string): void {
    if (sectionID === 'contacts') {
      this.modalService.toggleModal(sectionID);
    } else {
      this.smoothScrollService.scrollToSection(sectionID);
    }

    this.mobileMenuService.closeMobileMenu();

    if (!this.mobileMenuService.isMobileMenuOpen && this.mobileMenuEl) {
      this.mobileMenuEl.style.transform = 'scaleY(0)';
    }
  }
}
