import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../header.component';
import { FooterComponent } from '../../../footer/footer.component';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  features: string[];
  badges: string[];
  brand?: string;
  inStock: boolean;
  delivery: string;
}

@Component({
  selector: 'app-shop-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'Wireless Bluetooth Headphones',
      price: 89.99,
      originalPrice: 129.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      category: 'Electronics',
      rating: 4.5,
      reviews: 234,
      description: 'High-quality wireless headphones with active noise cancellation technology, 30-hour battery life, and premium sound quality. Perfect for music lovers and professionals.',
      features: ['Active Noise Cancellation', '30hr Battery Life', 'Bluetooth 5.0', 'Quick Charge', 'Voice Assistant'],
      badges: ['SALE', 'HOT'],
      brand: 'Sony',
      inStock: true,
      delivery: 'Free 2-Day Delivery'
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      price: 149.99,
      originalPrice: 199.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
      category: 'Electronics',
      rating: 4.8,
      reviews: 456,
      description: 'Advanced fitness tracker with comprehensive health monitoring, GPS tracking, and smart notifications. Track your workouts, sleep, and daily activity.',
      features: ['Heart Rate Monitor', 'GPS Tracking', 'Water Resistant', 'Sleep Tracking', 'Smart Notifications'],
      badges: ['NEW'],
      brand: 'Apple',
      inStock: true,
      delivery: 'Free Delivery'
    },
    {
      id: 3,
      name: 'Premium Coffee Maker',
      price: 34.99,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop',
      category: 'Home & Garden',
      rating: 4.6,
      reviews: 189,
      description: 'Programmable coffee maker with thermal carafe and built-in grinder for the freshest coffee experience. Brews up to 12 cups.',
      features: ['Programmable', 'Thermal Carafe', 'Built-in Grinder', '24hr Timer', 'Auto Shut-off'],
      badges: ['BESTSELLER'],
      brand: 'LG',
      inStock: true,
      delivery: 'Free Standard Delivery'
    },
    {
      id: 4,
      name: 'Professional Running Shoes',
      price: 299.99,
      originalPrice: 349.99,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
      category: 'Sports',
      rating: 4.7,
      reviews: 345,
      description: 'High-performance running shoes with advanced cushioning and support technology. Designed for serious athletes and marathon runners.',
      features: ['Advanced Cushioning', 'Breathable Mesh', 'Non-slip Sole', 'Lightweight', 'Arch Support'],
      badges: ['SALE'],
      brand: 'Nike',
      inStock: true,
      delivery: 'Free Next Day Delivery'
    },
    {
      id: 5,
      name: 'Mechanical Gaming Keyboard',
      price: 449.99,
      image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop',
      category: 'Electronics',
      rating: 4.4,
      reviews: 123,
      description: 'Professional mechanical gaming keyboard with RGB lighting, programmable keys, and fast response times for competitive gaming.',
      features: ['Mechanical Switches', 'RGB Lighting', 'Programmable Keys', 'Anti-ghosting', 'Wrist Rest'],
      badges: ['NEW'],
      brand: 'Dell',
      inStock: false,
      delivery: 'Backorder - Ships in 2 weeks'
    },
    {
      id: 6,
      name: 'Designer Leather Handbag',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop',
      category: 'Fashion',
      rating: 4.3,
      reviews: 98,
      description: 'Elegant designer handbag made from genuine leather with multiple compartments and adjustable strap.',
      features: ['Genuine Leather', 'Multiple Compartments', 'Adjustable Strap', 'Zipper Closure', 'Water Resistant'],
      badges: ['TRENDING'],
      brand: 'Adidas',
      inStock: true,
      delivery: 'Free Delivery'
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

  // Filter and sort properties
  selectedCategory: string = 'All';
  sortBy: string = 'featured';
  categories: string[] = ['All', 'Electronics', 'Fashion', 'Home & Garden', 'Sports'];
  sortOptions: string[] = ['featured', 'price-low', 'price-high', 'rating', 'newest'];

  ngOnInit() {}

  get filteredProducts() {
    let filtered = this.products;

    // Filter by category
    if (this.selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === this.selectedCategory);
    }

    // Sort products
    switch (this.sortBy) {
      case 'price-low':
        return filtered.sort((a, b) => a.price - b.price);
      case 'price-high':
        return filtered.sort((a, b) => b.price - a.price);
      case 'rating':
        return filtered.sort((a, b) => b.rating - a.rating);
      case 'newest':
        return filtered.sort((a, b) => b.id - a.id);
      default:
        return filtered;
    }
  }

  generateStars(rating: number): string {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    return '★'.repeat(fullStars) + (halfStar ? '½' : '') + '☆'.repeat(emptyStars);
  }

  calculateDiscount(originalPrice: number, currentPrice: number): number {
    if (!originalPrice || originalPrice <= currentPrice) return 0;
    const discount = ((originalPrice - currentPrice) / originalPrice) * 100;
    return Math.round(discount);
  }

  addToCart(product: Product) {
    console.log('Added to cart:', product.name);
    // Implement cart functionality
  }

  addToWishlist(product: Product) {
    console.log('Added to wishlist:', product.name);
    // Implement wishlist functionality
  }

  compareProduct(product: Product) {
    console.log('Compare product:', product.name);
    // Implement compare functionality
  }
}