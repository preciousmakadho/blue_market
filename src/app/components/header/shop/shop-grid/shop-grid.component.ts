import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Add this import
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
  badges: string[];
  brand?: string;
}

@Component({
  selector: 'app-shop-grid',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    FormsModule, // Add this to imports array
    HeaderComponent, 
    FooterComponent
  ],
  templateUrl: './shop-grid.component.html',
  styleUrls: ['./shop-grid.component.css']
})
export class ShopGridComponent implements OnInit {
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
      badges: ['SALE', 'HOT'],
      brand: 'Sony'
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
      badges: ['NEW'],
      brand: 'Apple'
    },
    {
      id: 3,
      name: 'Premium Coffee Maker',
      price: 34.99,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop',
      category: 'Home & Garden',
      rating: 4.6,
      reviews: 189,
      badges: [],
      brand: 'LG'
    },
    {
      id: 4,
      name: 'Running Shoes',
      price: 299.99,
      originalPrice: 349.99,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
      category: 'Sports',
      rating: 4.7,
      reviews: 345,
      badges: ['SALE'],
      brand: 'Nike'
    },
    {
      id: 5,
      name: 'Gaming Keyboard',
      price: 449.99,
      image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop',
      category: 'Electronics',
      rating: 4.4,
      reviews: 123,
      badges: ['NEW'],
      brand: 'Dell'
    },
    {
      id: 6,
      name: 'Designer Handbag',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop',
      category: 'Fashion',
      rating: 4.3,
      reviews: 98,
      badges: [],
      brand: 'Adidas'
    },
    {
      id: 7,
      name: 'Wireless Speaker',
      price: 54.99,
      originalPrice: 74.99,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
      category: 'Electronics',
      rating: 4.5,
      reviews: 156,
      badges: ['SALE'],
      brand: 'Sony'
    },
    {
      id: 8,
      name: 'Yoga Mat Premium',
      price: 19.99,
      originalPrice: 29.99,
      image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop',
      category: 'Sports',
      rating: 4.9,
      reviews: 567,
      badges: ['HOT'],
      brand: 'Nike'
    },
    {
      id: 9,
      name: 'Smartphone Pro',
      price: 189.99,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
      category: 'Electronics',
      rating: 4.8,
      reviews: 234,
      badges: ['NEW'],
      brand: 'Samsung'
    },
    {
      id: 10,
      name: 'Winter Jacket',
      price: 69.99,
      originalPrice: 99.99,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop',
      category: 'Fashion',
      rating: 4.6,
      reviews: 178,
      badges: ['SALE'],
      brand: 'Adidas'
    },
    {
      id: 11,
      name: 'Skincare Set',
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
      category: 'Beauty',
      rating: 4.7,
      reviews: 456,
      badges: ['HOT'],
      brand: 'L\'Oréal'
    },
    {
      id: 12,
      name: 'Cookware Set',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
      category: 'Home & Garden',
      rating: 4.5,
      reviews: 289,
      badges: ['NEW'],
      brand: 'Tefal'
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
  categories: string[] = ['All', 'Electronics', 'Fashion', 'Home & Garden', 'Sports', 'Beauty'];
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

  toggleWishlist(product: Product) {
    console.log('Toggle wishlist:', product.name);
    // Implement wishlist functionality
  }
}