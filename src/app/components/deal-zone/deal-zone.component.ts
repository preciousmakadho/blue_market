import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-deal-zone',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './deal-zone.component.html',
  styleUrls: ['./deal-zone.component.css']
})
export class DealZoneComponent implements OnInit, OnDestroy {
  timeLeft = {
    days: 2,
    hours: 23,
    minutes: 58,
    seconds: 3
  };

  private timer: any;

  dealProducts: Product[] = [
    {
      id: 5,
      sku: '585-7335-6',
      name: 'Brandix Manual Five Speed Gearbox',
      description: 'High-performance manual transmission gearbox with smooth shifting',
      price: 879.00,
      originalPrice: 1120.00,
      rating: 4,
      reviewCount: 6,
      imageUrl: 'https://images.unsplash.com/photo-1603712610496-5368a73c673f?w=400&h=300&fit=crop&auto=format',
      category: 'Transmission',
      isFeatured: false,
      isOnSale: true
    },
    {
      id: 6,
      sku: '479-7366-8',
      name: 'Set of Car Floor Mats Brandix Z4',
      description: 'Premium all-weather floor mats with custom fit',
      price: 78.00,
      originalPrice: 94.00,
      rating: 4,
      reviewCount: 16,
      imageUrl: 'https://images.unsplash.com/photo-1621401730319-07ce0cda54fb?w=400&h=300&fit=crop&auto=format',
      category: 'Interior',
      isFeatured: false,
      isOnSale: true
    },
    {
      id: 7,
      sku: 'STJ-5782-14',
      name: 'LED Taillights Brandix Z54',
      description: 'Modern LED taillights with sequential turn signals',
      price: 60.00,
      originalPrice: 85.00,
      rating: 4,
      reviewCount: 8,
      imageUrl: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=400&h=300&fit=crop&auto=format',
      category: 'Lighting',
      isFeatured: false,
      isOnSale: true
    },
    {
      id: 8,
      sku: '994-34346-8',
      name: 'Wiper Blades Brandix WL2',
      description: 'All-season windshield wiper blades - pair',
      price: 12.00,
      originalPrice: 24.00,
      rating: 4,
      reviewCount: 41,
      imageUrl: 'https://images.unsplash.com/photo-1563720223485-41b8c4ad8d8d?w=400&h=300&fit=crop&auto=format',
      category: 'Exterior',
      isFeatured: false,
      isOnSale: true
    },
    {
      id: 9,
      sku: 'BRK-4567-2',
      name: 'Performance Brake Rotors',
      description: 'Drilled and slotted brake rotors for better stopping',
      price: 189.00,
      originalPrice: 249.00,
      rating: 5,
      reviewCount: 23,
      imageUrl: 'https://images.unsplash.com/photo-1556740754-4c76ae2c4c9e?w=400&h=300&fit=crop&auto=format',
      category: 'Brakes',
      isFeatured: false,
      isOnSale: true
    },
    {
      id: 10,
      sku: 'FLT-7890-1',
      name: 'Premium Oil Filter Kit',
      description: 'Complete oil filter kit with synthetic media',
      price: 18.00,
      originalPrice: 32.00,
      rating: 4,
      reviewCount: 34,
      imageUrl: 'https://images.unsplash.com/photo-1629824222448-505b4ae1e8cd?w=400&h=300&fit=crop&auto=format',
      category: 'Engine',
      isFeatured: false,
      isOnSale: true
    }
  ];

  // Store random stock values for each product
  productStock: { [key: number]: { progress: number; quantity: number } } = {};

  ngOnInit() {
    this.startTimer();
    this.initializeStockValues();
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  initializeStockValues() {
    // Generate random stock values for each product
    this.dealProducts.forEach(product => {
      this.productStock[product.id] = {
        progress: Math.random() * 50 + 30, // 30-80%
        quantity: Math.floor(Math.random() * 20) + 5 // 5-25 items
      };
    });
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.timeLeft.seconds--;
      
      if (this.timeLeft.seconds < 0) {
        this.timeLeft.seconds = 59;
        this.timeLeft.minutes--;
        
        if (this.timeLeft.minutes < 0) {
          this.timeLeft.minutes = 59;
          this.timeLeft.hours--;
          
          if (this.timeLeft.hours < 0) {
            this.timeLeft.hours = 23;
            this.timeLeft.days--;
            
            if (this.timeLeft.days < 0) {
              clearInterval(this.timer);
              this.timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
            }
          }
        }
      }
    }, 1000);
  }

  addToCart(product: Product) {
    console.log('Added to cart:', product);
    // Add cart functionality here
  }

  getStars(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i < rating ? 1 : 0);
  }

  calculateDiscount(originalPrice: number, currentPrice: number): number {
    return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
  }

  getProductDiscount(product: Product): number {
    if (product.originalPrice) {
      return this.calculateDiscount(product.originalPrice, product.price);
    }
    return 0;
  }

  getStockProgress(productId: number): number {
    return this.productStock[productId]?.progress || 50;
  }

  getStockQuantity(productId: number): number {
    return this.productStock[productId]?.quantity || 10;
  }
}