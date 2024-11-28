import {Component, inject} from '@angular/core';
import {MenuListInterface} from '../../../shared/types/menuList.interface';
import {MENU_ITEMS} from './menu-mock';
import {SmoothScrollService} from '../../../shared/services/smooth-scroll.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  isMobileMenuOpen: boolean = false;

  menuItems: MenuListInterface[] = MENU_ITEMS;

  smoothScrollService = inject(SmoothScrollService);

}
