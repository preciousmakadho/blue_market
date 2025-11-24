import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent {
  featuredProducts: Product[] = [
    {
      id: 1,
      sku: 'SRL 140-1040-8',
      name: 'Brandix Spark Plug Kit ASR-400',
      description: 'High-performance spark plug kit for optimal engine performance',
      price: 19.00,
      rating: 4,
      reviewCount: 3,
      imageUrl: 'assets/images/spark-plug.jpg',
      category: 'Engine',
      isFeatured: true,
      isOnSale: false
    },
    {
      id: 2,
      sku: 'SRL 573-3734-0',
      name: 'Brandix Brake Kit BDX-7502370-5',
      description: 'Complete brake kit including pads, rotors, and hardware',
      price: 224.00,
      rating: 4,
      reviewCount: 22,
      imageUrl: 'assets/images/brake-kit.jpg',
      category: 'Brakes',
      isFeatured: true,
      isOnSale: false
    },
    {
      id: 3,
      sku: 'SRL 009-5079-2',
      name: 'Left Headlight Of Brandix Z54',
      description: 'OEM replacement headlight with LED technology',
      price: 349.00,
      originalPrice: 415.00,
      rating: 3,
      reviewCount: 14,
      imageUrl: 'assets/images/headlight.jpg',
      category: 'Lighting',
      isFeatured: true,
      isOnSale: true
    },
    {
      id: 4,
      sku: 'SRL A64-4326-8',
      name: 'Glossy Gray 1/7 Aluminium Wheel AR-19',
      description: 'Premium aluminum alloy wheels for enhanced performance',
      price: 599.00,
      rating: 4,
      reviewCount: 26,
      imageUrl: 'assets/images/wheel.jpg',
      category: 'Wheels',
      isFeatured: true,
      isOnSale: false
    }
  ];

  addToCart(product: Product) {
    console.log('Added to cart:', product);
    // Implement cart functionality
  }

  getStars(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i < rating ? 1 : 0);
  }
}