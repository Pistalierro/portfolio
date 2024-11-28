import {Component, inject} from '@angular/core';
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
export class HeaderComponent {

  isMenuVisible: boolean = false;

  menuItems: MenuListInterface[] = MENU_ITEMS;

  smoothScrollService = inject(SmoothScrollService);
  mobileMenuService = inject(MobileMenuService);
}
