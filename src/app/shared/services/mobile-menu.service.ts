import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileMenuService {

  isMobileMenuOpen: boolean = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
