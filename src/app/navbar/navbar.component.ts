import { CommonModule, NgStyle } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, NgStyle],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  menuHidden: boolean = true;
  toggle() {
    this.menuHidden = !this.menuHidden;
  }

  padding: string = '15px';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset;
    if (offset > 100) {
      this.padding = '5px';
    } else {
      this.padding = '15px';
    }
  }
}
