import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  items: string[] = [
    'assets/images/port1.png',
    'assets/images/port2.png',
    'assets/images/port3.png',
    'assets/images/port1.png',
    'assets/images/port2.png',
    'assets/images/port3.png',
  ];

  selectedImage!: string | null;
  openModal(image: string): void {
    this.selectedImage = image;
  }

  closeModal(): void {
    this.selectedImage = null;
  }
}
