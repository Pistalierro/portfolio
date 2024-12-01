import {MenuListInterface} from '../types/menuList.interface';

export const MENU_ITEMS: MenuListInterface[] = [
  {sectionID: 'header', label: '', icon: 'fa-solid fa-house', action: 'scroll'},
  {sectionID: 'about', label: 'О себе', action: 'scroll'},
  {sectionID: 'portfolio', label: 'Портфолио', action: 'scroll'},
  {sectionID: 'skills', label: 'Skills', action: 'scroll'},
  {sectionID: 'contacts', label: 'Контакты', action: 'modal'},
];
