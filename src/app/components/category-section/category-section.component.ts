import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-category-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-section.component.html',
  styleUrls: ['./category-section.component.css']
})
export class CategorySectionComponent {
  activeTab = 'featured';
  
  categories = [
    'Wheel Covers',
    'Brake Kits',
    'Tire Chains',
    'Wheel Disks',
    'Tires',
    'Sensors',
    'Accessories'
  ];

  tiresProducts: Product[] = [
    {
      id: 9,
      sku: '573-4938-C',
      name: 'Motor Oil Level 5',
      description: 'Premium synthetic motor oil',
      price: 23.00,
      rating: 5,
      reviewCount: 2,
      imageUrl: 'assets/images/motor-oil.jpg',
      category: 'Fluids',
      isFeatured: false,
      isOnSale: false
    },
    {
      id: 10,
      sku: '753-38573-B',
      name: 'Brandix Engine Block Z4',
      description: 'High-performance engine block',
      price: 452.00,
      rating: 0,
      reviewCount: 0,
      imageUrl: 'assets/images/engine-block.jpg',
      category: 'Engine',
      isFeatured: false,
      isOnSale: false
    },
    {
      id: 11,
      sku: '472-67382-Z',
      name: 'Brandix Clutch Discs Z175',
      description: 'Performance clutch disc set',
      price: 573.00,
      rating: 3.5,
      reviewCount: 7,
      imageUrl: 'assets/images/clutch-discs.jpg',
      category: 'Transmission',
      isFeatured: false,
      isOnSale: false
    },
    {
      id: 12,
      sku: '555-78236-G',
      name: 'Brandix Manual Five Speed Gearbox',
      description: 'Complete manual transmission assembly',
      price: 879.00,
      rating: 4,
      reviewCount: 6,
      imageUrl: 'assets/images/gearbox-2.jpg',
      category: 'Transmission',
      isFeatured: false,
      isOnSale: false
    }
  ];

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  addToCart(product: Product) {
    console.log('Added to cart:', product);
  }

  getStars(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i < rating ? 1 : 0);
  }
}