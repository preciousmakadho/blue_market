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
  originalPrice?: number;
  quantity: number;
  image: string;
  category: string;
  brand?: string;
  inStock: boolean;
  maxQuantity: number;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [
    {
      id: 1,
      name: 'Wireless Bluetooth Headphones',
      price: 89.99,
      originalPrice: 129.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop',
      category: 'Electronics',
      brand: 'Sony',
      inStock: true,
      maxQuantity: 10
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      price: 149.99,
      originalPrice: 199.99,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop',
      category: 'Electronics',
      brand: 'Apple',
      inStock: true,
      maxQuantity: 5
    },
    {
      id: 3,
      name: 'Premium Coffee Maker',
      price: 34.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=200&h=200&fit=crop',
      category: 'Home & Garden',
      brand: 'LG',
      inStock: true,
      maxQuantity: 8
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

  shippingCost: number = 0;
  discount: number = 15.00;
  estimatedDelivery: string = 'Nov 28 - Dec 2';

  ngOnInit() {
    this.calculateShipping();
  }

  get subtotal(): number {
    return this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  get tax(): number {
    return this.subtotal * 0.08;
  }

  get total(): number {
    return this.subtotal + this.tax + this.shippingCost - this.discount;
  }

  get totalSavings(): number {
    return this.cartItems.reduce((sum, item) => {
      if (item.originalPrice) {
        return sum + ((item.originalPrice - item.price) * item.quantity);
      }
      return sum;
    }, 0) + this.discount;
  }

  calculateShipping() {
    this.shippingCost = this.subtotal > 50 ? 0 : 5.99;
  }

  updateQuantity(item: CartItem, change: number) {
    const newQuantity = item.quantity + change;
    if (newQuantity >= 1 && newQuantity <= item.maxQuantity) {
      item.quantity = newQuantity;
      this.calculateShipping();
    }
  }

  removeItem(item: CartItem) {
    if (confirm(`Remove "${item.name}" from your cart?`)) {
      this.cartItems = this.cartItems.filter(i => i.id !== item.id);
      this.calculateShipping();
    }
  }

  moveToWishlist(item: CartItem) {
    console.log('Move to wishlist:', item.name);
    this.removeItem(item);
  }

  calculateDiscount(originalPrice: number, currentPrice: number): number {
    if (!originalPrice || originalPrice <= currentPrice) return 0;
    const discount = ((originalPrice - currentPrice) / originalPrice) * 100;
    return Math.round(discount);
  }

  proceedToCheckout() {
    console.log('Proceeding to checkout');
    // Implement checkout logic
  }

  continueShopping() {
    console.log('Continue shopping');
    // Navigate to shop or home
  }

  getStockStatus(item: CartItem): string {
    if (!item.inStock) return 'out-of-stock';
    if (item.quantity >= item.maxQuantity) return 'limit-reached';
    return 'in-stock';
  }
}