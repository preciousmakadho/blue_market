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
      imageUrl: 'https://images.unsplash.com/photo-1629824222448-505b4ae1e8cd?w=400&h=300&fit=crop&auto=format',
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
      imageUrl: 'https://images.unsplash.com/photo-1556740754-4c76ae2c4c9e?w=400&h=300&fit=crop&auto=format',
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
      imageUrl: 'https://images.unsplash.com/photo-1621401730319-07ce0cda54fb?w=400&h=300&fit=crop&auto=format',
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
      imageUrl: 'https://images.unsplash.com/photo-1555212697-194d092e3b8f?w=400&h=300&fit=crop&auto=format',
      category: 'Wheels',
      isFeatured: true,
      isOnSale: false
    },
    {
      id: 5,
      sku: 'SRL B72-8912-3',
      name: 'Brandix Oil Filter OF-2000',
      description: 'Premium oil filter for maximum engine protection',
      price: 24.99,
      originalPrice: 32.00,
      rating: 5,
      reviewCount: 47,
      imageUrl: 'https://images.unsplash.com/photo-1603712610496-5368a73c673f?w=400&h=300&fit=crop&auto=format',
      category: 'Engine',
      isFeatured: true,
      isOnSale: true
    },
    {
      id: 6,
      sku: 'SRL C88-5678-1',
      name: 'Performance Air Intake System',
      description: 'Cold air intake system for improved horsepower',
      price: 189.00,
      rating: 4,
      reviewCount: 31,
      imageUrl: 'https://images.unsplash.com/photo-1563720223485-41b8c4ad8d8d?w=400&h=300&fit=crop&auto=format',
      category: 'Engine',
      isFeatured: true,
      isOnSale: false
    },
    {
      id: 7,
      sku: 'SRL D45-7890-4',
      name: 'Sport Exhaust Muffler',
      description: 'Stainless steel performance muffler',
      price: 299.00,
      rating: 4,
      reviewCount: 28,
      imageUrl: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=400&h=300&fit=crop&auto=format',
      category: 'Exhaust',
      isFeatured: true,
      isOnSale: false
    },
    {
      id: 8,
      sku: 'SRL E12-3456-7',
      name: 'Performance Shock Absorbers',
      description: 'Heavy-duty shock absorbers for smooth ride',
      price: 425.00,
      originalPrice: 499.00,
      rating: 5,
      reviewCount: 19,
      imageUrl: 'https://images.unsplash.com/photo-1632855802115-6a5d90b46cb9?w=400&h=300&fit=crop&auto=format',
      category: 'Suspension',
      isFeatured: true,
      isOnSale: true
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