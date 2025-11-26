import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../header.component';
import { FooterComponent } from '../../../footer/footer.component';

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  brand?: string;
}

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  wishlistItems: WishlistItem[] = [
    {
      id: 1,
      name: 'Brandix Spark Plug Kit ASR-400',
      price: 19.00,
      image: 'https://images.unsplash.com/photo-1564466809056-82f7b4235d91?w=400&h=400&fit=crop',
      category: 'Automotive',
      rating: 4.3,
      reviews: 3,
      inStock: true,
      brand: 'Brandix'
    },
    {
      id: 2,
      name: 'Brandix Brake Kit BDX-7502370-S',
      price: 224.00,
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=400&fit=crop',
      category: 'Automotive',
      rating: 4.8,
      reviews: 22,
      inStock: true,
      brand: 'Brandix'
    },
    {
      id: 3,
      name: 'Left Headlight Of Brandix Z54',
      price: 349.00,
      image: 'https://images.unsplash.com/photo-1506197603050-40f8a0b16d60?w=400&h=400&fit=crop',
      category: 'Automotive',
      rating: 4.6,
      reviews: 14,
      inStock: true,
      brand: 'Brandix'
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

  moveToCart(item: WishlistItem) {
    console.log('Move to cart:', item);
    // Implement cart functionality
  }

  moveAllToCart() {
    console.log('Moving all items to cart:', this.wishlistItems);
    // Implement move all to cart functionality
    // Optionally remove items from wishlist after moving to cart
    // this.wishlistItems = [];
  }

  removeFromWishlist(item: WishlistItem) {
    this.wishlistItems = this.wishlistItems.filter(i => i.id !== item.id);
  }

  generateStars(rating: number): string {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    return '★'.repeat(fullStars) + (halfStar ? '½' : '') + '☆'.repeat(emptyStars);
  }
}