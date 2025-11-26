import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../header.component';
import { FooterComponent } from '../../../footer/footer.component';

interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  estimatedDelivery: string;
  trackingNumber?: string;
}

@Component({
  selector: 'app-order-success',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {
  order = {
    number: 'ORD-789456',
    date: new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    total: 226.77,
    estimatedDelivery: 'Dec 15, 2024',
    trackingNumber: 'TRK-789123456',
    shippingAddress: {
      name: 'John Doe',
      address: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States'
    },
    paymentMethod: 'Visa ending in 4242'
  };

  orderItems: OrderItem[] = [
    {
      id: 1,
      name: 'Wireless Bluetooth Headphones',
      price: 89.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop',
      estimatedDelivery: 'Dec 12, 2024',
      trackingNumber: 'TRK-789123457'
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      price: 149.99,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop',
      estimatedDelivery: 'Dec 15, 2024',
      trackingNumber: 'TRK-789123458'
    }
  ];

  // Footer data
  topRatedProducts = [
    {
      id: 13,
      name: 'Laptop Stand',
      price: 24.99,
      rating: 4.9,
      reviews: 789,
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=200&h=200&fit=crop'
    },
    {
      id: 14,
      name: 'Water Bottle',
      price: 29.99,
      rating: 4.8,
      reviews: 678,
      image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=200&h=200&fit=crop'
    }
  ];

  specialOffers = [
    {
      id: 16,
      name: 'Wireless Earbuds',
      price: 59.99,
      originalPrice: 89.99,
      rating: 4.7,
      reviews: 345,
      image: 'https://images.unsplash.com/photo-1590658165737-15a047b8b5e3?w=200&h=200&fit=crop'
    }
  ];

  bestsellers = [
    {
      id: 19,
      name: 'Tablet',
      price: 199.99,
      rating: 4.8,
      reviews: 567,
      image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=200&h=200&fit=crop'
    }
  ];

  ngOnInit() {
    // Simulate order confirmation email
    setTimeout(() => {
      console.log('Order confirmation email sent');
    }, 1000);
  }

  trackOrder(trackingNumber?: string) {
    if (trackingNumber) {
      console.log('Tracking individual item:', trackingNumber);
      // Navigate to tracking page for specific item
    } else {
      console.log('Tracking entire order:', this.order.trackingNumber);
      // Navigate to order tracking page
    }
  }

  continueShopping() {
    console.log('Continue shopping');
    // Navigate to shop
  }

  viewOrderDetails() {
    console.log('View order details');
    // Navigate to order details page
  }

  downloadInvoice() {
    console.log('Download invoice');
    // Implement invoice download
  }

  getOrderStatus(): string {
    return 'Confirmed';
  }

  getOrderStatusColor(): string {
    return '#28a745';
  }

  getDeliveryProgress(): number {
    return 25; // 25% progress for order confirmed
  }
}