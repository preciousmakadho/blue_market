import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  years = ['2025', '2024', '2023', '2022'];
  brands = ['Samsung', 'Nike', 'Apple', 'Bosch', 'Sony'];
  models = ['Model A', 'Model B', 'Model C'];
  engines = ['Option 1', 'Option 2', 'Option 3'];

  selectedYear = '';
  selectedBrand = '';
  selectedModel = '';
  selectedEngine = '';

  featuredProducts = [
    {
      title: 'Wireless Bluetooth Headphones',
      price: 89.99,
      rating: 4.5,
      reviews: 32,
      img: '/assets/products/headphones.png'
    },
    {
      title: 'Smart LED TV 55-inch 4K',
      price: 499.99,
      rating: 4.7,
      reviews: 112,
      img: '/assets/products/tv.png'
    },
    {
      title: 'Office Chair Ergonomic Comfort',
      price: 129.99,
      rating: 4.2,
      reviews: 20,
      img: '/assets/products/chair.png'
    },
    {
      title: 'Men’s Running Shoes',
      price: 59.99,
      rating: 4.8,
      reviews: 55,
      img: '/assets/products/shoes.png'
    }
  ];
}
