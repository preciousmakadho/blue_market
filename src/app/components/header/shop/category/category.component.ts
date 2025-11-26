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
  badges: string[];
  brand?: string;
}

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    FormsModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories = [
    'Electronics',
    'Fashion',
    'Home & Garden',
    'Sports',
    'Beauty',
    'Books',
    'Toys & Games',
    'Automotive'
  ];

  brands = ['Apple', 'Samsung', 'Nike', 'Sony', 'LG', 'Dell', 'HP', 'Adidas'];
  selectedCategory: string = 'All';
  sortBy: string = 'featured';
  viewMode: string = 'grid';
  priceRange: number[] = [0, 1000];
  selectedBrands: string[] = [];
  selectedRatings: number[] = [];
  
  products: Product[] = [
    {
      id: 1,
      name: 'Wireless Bluetooth Headphones',
      price: 89.99,
      originalPrice: 129.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      category: 'Electronics',
      brand: 'Sony',
      rating: 4.5,
      reviews: 234,
      badges: ['SALE', 'HOT']
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      price: 149.99,
      originalPrice: 199.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
      category: 'Electronics',
      brand: 'Apple',
      rating: 4.8,
      reviews: 456,
      badges: ['NEW']
    },
    {
      id: 3,
      name: 'Premium Coffee Maker',
      price: 34.99,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop',
      category: 'Home & Garden',
      brand: 'LG',
      rating: 4.6,
      reviews: 189,
      badges: []
    },
    {
      id: 4,
      name: 'Running Shoes',
      price: 299.99,
      originalPrice: 349.99,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
      category: 'Sports',
      brand: 'Nike',
      rating: 4.7,
      reviews: 345,
      badges: ['SALE']
    },
    {
      id: 5,
      name: 'Gaming Keyboard',
      price: 449.99,
      image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop',
      category: 'Electronics',
      brand: 'Dell',
      rating: 4.4,
      reviews: 123,
      badges: ['NEW']
    },
    {
      id: 6,
      name: 'Designer Handbag',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop',
      category: 'Fashion',
      brand: 'Adidas',
      rating: 4.3,
      reviews: 98,
      badges: []
    },
    {
      id: 7,
      name: 'Laptop Pro',
      price: 999.99,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop',
      category: 'Electronics',
      brand: 'Apple',
      rating: 4.9,
      reviews: 567,
      badges: ['HOT']
    },
    {
      id: 8,
      name: 'Sports T-Shirt',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      category: 'Fashion',
      brand: 'Nike',
      rating: 4.2,
      reviews: 78,
      badges: []
    }
  ];

  filteredProducts: Product[] = [];
  categoryCounts: { [key: string]: number } = {};

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
    },
    {
      id: 15,
      name: 'Desk Lamp',
      price: 149.99,
      rating: 4.9,
      reviews: 890,
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=200&h=200&fit=crop'
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
    },
    {
      id: 17,
      name: 'Backpack',
      price: 299.99,
      originalPrice: 449.99,
      rating: 4.6,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop'
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
    },
    {
      id: 20,
      name: 'Running Shorts',
      price: 249.99,
      rating: 4.7,
      reviews: 432,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop'
    }
  ];

  ngOnInit() {
    this.calculateCategoryCounts();
    this.filteredProducts = this.products;
  }

  calculateCategoryCounts() {
    // Count for 'All' category
    this.categoryCounts['All'] = this.products.length;
    
    // Count for each specific category
    this.categories.forEach(category => {
      this.categoryCounts[category] = this.products.filter(p => p.category === category).length;
    });
  }

  getCategoryCount(category: string): number {
    return this.categoryCounts[category] || 0;
  }

  calculateDiscount(originalPrice: number, currentPrice: number): number {
    if (!originalPrice || originalPrice <= currentPrice) return 0;
    const discount = ((originalPrice - currentPrice) / originalPrice) * 100;
    return Math.round(discount);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.applyFilters();
  }

  onSortChange(sort: string) {
    this.sortBy = sort;
    this.applySorting();
  }

  onViewChange(view: string) {
    this.viewMode = view;
  }

  onBrandChange(brand: string, event: any) {
    if (event.target.checked) {
      this.selectedBrands.push(brand);
    } else {
      this.selectedBrands = this.selectedBrands.filter(b => b !== brand);
    }
    this.applyFilters();
  }

  onRatingChange(rating: number, event: any) {
    if (event.target.checked) {
      this.selectedRatings.push(rating);
    } else {
      this.selectedRatings = this.selectedRatings.filter(r => r !== rating);
    }
    this.applyFilters();
  }

  applyFilters() {
    let filtered = this.products;

    if (this.selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === this.selectedCategory);
    }

    if (this.selectedBrands.length > 0) {
      filtered = filtered.filter(product => 
        product.brand && this.selectedBrands.includes(product.brand)
      );
    }

    if (this.selectedRatings.length > 0) {
      filtered = filtered.filter(product => 
        this.selectedRatings.some(rating => product.rating >= rating)
      );
    }

    filtered = filtered.filter(product => 
      product.price >= this.priceRange[0] && product.price <= this.priceRange[1]
    );

    this.filteredProducts = filtered;
    this.applySorting();
  }

  applySorting() {
    switch (this.sortBy) {
      case 'price-low':
        this.filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        this.filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        this.filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        // Assuming newer products have higher IDs
        this.filteredProducts.sort((a, b) => b.id - a.id);
        break;
      default:
        // Featured - no sorting
        break;
    }
  }

  generateStars(rating: number): string {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    return '★'.repeat(fullStars) + (halfStar ? '½' : '') + '☆'.repeat(emptyStars);
  }

  addToCart(product: Product) {
    console.log('Added to cart:', product.name);
    // Implement cart functionality
    // You can add toast notification or cart service call here
  }

  clearAllFilters() {
    this.selectedCategory = 'All';
    this.selectedBrands = [];
    this.selectedRatings = [];
    this.priceRange = [0, 1000];
    this.sortBy = 'featured';
    this.applyFilters();
  }
}