import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

interface gallery {
  src : string;
  name : string;
  price: number;

}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ NgFor , NgIf ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  items: gallery[] = [
    {src: "assets/images/port1.png", name: "Product 1", price: 100},
    {src: "assets/images/port2.png", name: "Product 2", price: 200},
    {src: "assets/images/port3.png", name: "Product 3", price: 300},
    {src: "assets/images/port1.png", name: "Product 4", price: 400},
    {src: "assets/images/port2.png", name: "Product 5", price: 500},
    {src: "assets/images/port3.png", name: "Product 6", price: 600},
    {src: "assets/images/port1.png", name: "Product 7", price: 700},
    {src: "assets/images/port2.png", name: "Product 8", price: 800},
    {src: "assets/images/port3.png", name: "Product 9", price: 900},
    {src: "assets/images/port1.png", name: "Product 10", price: 1000},
    {src: "assets/images/port2.png", name: "Product 11", price: 1100},
    {src: "assets/images/port3.png", name: "Product 12", price: 1200},
  ];










}
