import {Component, inject} from '@angular/core';
import {MenuListInterface} from '../../../shared/types/menuList.interface';
import {MENU_ITEMS} from './menu-mock';
import {SmoothScrollService} from '../../../shared/services/smooth-scroll.service';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {MobileMenuService} from '../../../shared/services/mobile-menu.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgClass
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  isMobileMenuOpen: boolean = false;

  menuItems: MenuListInterface[] = MENU_ITEMS;

  smoothScrollService = inject(SmoothScrollService);
  mobileMenuService = inject(MobileMenuService);

}
