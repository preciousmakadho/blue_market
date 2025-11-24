import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-deal-zone',
  standalone: true,
  imports: [CommonModule],
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
      description: 'High-performance manual transmission gearbox',
      price: 879.00,
      rating: 4,
      reviewCount: 6,
      imageUrl: 'assets/images/gearbox.jpg',
      category: 'Transmission',
      isFeatured: false,
      isOnSale: true
    },
    {
      id: 6,
      sku: '479-7366-8',
      name: 'Set of Car Floor Mats Brandix Z4',
      description: 'Premium all-weather floor mats',
      price: 78.00,
      originalPrice: 94.00,
      rating: 4,
      reviewCount: 16,
      imageUrl: 'assets/images/floor-mats.jpg',
      category: 'Interior',
      isFeatured: false,
      isOnSale: true
    },
    {
      id: 7,
      sku: 'STJ-5782-14',
      name: 'Taillights Brandix Z54',
      description: 'LED taillights with modern design',
      price: 60.00,
      rating: 4,
      reviewCount: 8,
      imageUrl: 'assets/images/taillights.jpg',
      category: 'Lighting',
      isFeatured: false,
      isOnSale: true
    },
    {
      id: 8,
      sku: '994-34346-8',
      name: 'Wiper Blades Brandix WL2',
      description: 'All-season windshield wiper blades',
      price: 12.00,
      rating: 4,
      reviewCount: 41,
      imageUrl: 'assets/images/wiper-blades.jpg',
      category: 'Exterior',
      isFeatured: false,
      isOnSale: true
    }
  ];

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
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
              // Deal expired
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
  }

  getStars(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i < rating ? 1 : 0);
  }
}