import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../header.component';
import { FooterComponent } from '../../../footer/footer.component';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface Order {
  shipping: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    apartment?: string;
    city: string;
    country: string;
    state: string;
    zipCode: string;
    shippingMethod: string;
  };
  payment: {
    cardNumber: string;
    expiry: string;
    cvv: string;
    nameOnCard: string;
    saveCard: boolean;
  };
  billing: {
    sameAsShipping: boolean;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    country: string;
    state: string;
    zipCode: string;
  };
}

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  order: Order = {
    shipping: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      apartment: '',
      city: '',
      country: 'United States',
      state: '',
      zipCode: '',
      shippingMethod: 'standard'
    },
    payment: {
      cardNumber: '',
      expiry: '',
      cvv: '',
      nameOnCard: '',
      saveCard: false
    },
    billing: {
      sameAsShipping: true,
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      country: 'United States',
      state: '',
      zipCode: ''
    }
  };

  cartItems: CartItem[] = [
    {
      id: 1,
      name: 'Wireless Bluetooth Headphones',
      price: 89.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      price: 149.99,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop'
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

  countries = ['United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 'France'];
  states = ['California', 'New York', 'Texas', 'Florida', 'Illinois', 'Washington'];
  shippingMethods = [
    { id: 'standard', name: 'Standard Shipping', cost: 5.99, delivery: '3-5 business days' },
    { id: 'express', name: 'Express Shipping', cost: 12.99, delivery: '1-2 business days' },
    { id: 'overnight', name: 'Overnight Shipping', cost: 24.99, delivery: 'Next business day' }
  ];

  selectedShipping = this.shippingMethods[0];
  discount: number = 15.00;
  taxRate: number = 0.08;

  ngOnInit() {
    this.updateBillingAddress();
  }

  get subtotal(): number {
    return this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  get tax(): number {
    return this.subtotal * this.taxRate;
  }

  get total(): number {
    return this.subtotal + this.tax + this.selectedShipping.cost - this.discount;
  }

  get totalSavings(): number {
    return this.discount;
  }

  updateBillingAddress() {
    if (this.order.billing.sameAsShipping) {
      this.order.billing = {
        ...this.order.billing,
        firstName: this.order.shipping.firstName,
        lastName: this.order.shipping.lastName,
        address: this.order.shipping.address,
        city: this.order.shipping.city,
        country: this.order.shipping.country,
        state: this.order.shipping.state,
        zipCode: this.order.shipping.zipCode
      };
    }
  }

  onShippingMethodChange(methodId: string) {
    this.selectedShipping = this.shippingMethods.find(m => m.id === methodId) || this.shippingMethods[0];
    this.order.shipping.shippingMethod = methodId;
  }

  placeOrder() {
    if (this.validateForm()) {
      console.log('Order placed:', this.order);
      // Implement actual order placement logic
      alert('Order placed successfully!');
    }
  }

  validateForm(): boolean {
    // Basic validation - you can expand this
    const shipping = this.order.shipping;
    const payment = this.order.payment;
    
    if (!shipping.firstName || !shipping.lastName || !shipping.address || 
        !shipping.city || !shipping.country || !shipping.zipCode) {
      alert('Please fill in all required shipping fields.');
      return false;
    }

    if (!payment.cardNumber || !payment.expiry || !payment.cvv || !payment.nameOnCard) {
      alert('Please fill in all payment information.');
      return false;
    }

    return true;
  }

  formatCardNumber(event: any) {
    let value = event.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = value.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      event.target.value = parts.join(' ');
    } else {
      event.target.value = value;
    }
  }

  continueShopping() {
    console.log('Continue shopping');
    // Navigate to shop
  }
}