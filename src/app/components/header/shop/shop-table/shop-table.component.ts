import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../header.component';
import { FooterComponent } from '../../../footer/footer.component';

interface TableProduct {
  id: number;
  name: string;
  sku: string;
  price: number;
  stock: number;
  category: string;
  status: string;
  sales: number;
  dateAdded: string;
  image?: string;
  rating?: number;
}

@Component({
  selector: 'app-shop-table',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './shop-table.component.html',
  styleUrls: ['./shop-table.component.css']
})
export class ShopTableComponent implements OnInit {
  products: TableProduct[] = [
    {
      id: 1,
      name: 'Wireless Bluetooth Headphones',
      sku: 'WH-001',
      price: 89.99,
      stock: 45,
      category: 'Electronics',
      status: 'In Stock',
      sales: 234,
      dateAdded: '2024-01-15',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop',
      rating: 4.5
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      sku: 'SW-002',
      price: 149.99,
      stock: 23,
      category: 'Electronics',
      status: 'In Stock',
      sales: 156,
      dateAdded: '2024-02-01',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop',
      rating: 4.8
    },
    {
      id: 3,
      name: 'Premium Coffee Maker',
      sku: 'CM-003',
      price: 34.99,
      stock: 0,
      category: 'Home & Garden',
      status: 'Out of Stock',
      sales: 89,
      dateAdded: '2024-01-20',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=100&h=100&fit=crop',
      rating: 4.6
    },
    {
      id: 4,
      name: 'Running Shoes',
      sku: 'RS-004',
      price: 299.99,
      stock: 12,
      category: 'Sports',
      status: 'Low Stock',
      sales: 67,
      dateAdded: '2024-02-15',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop',
      rating: 4.7
    },
    {
      id: 5,
      name: 'Gaming Keyboard',
      sku: 'GK-005',
      price: 449.99,
      stock: 78,
      category: 'Electronics',
      status: 'In Stock',
      sales: 45,
      dateAdded: '2024-03-01',
      image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=100&h=100&fit=crop',
      rating: 4.4
    },
    {
      id: 6,
      name: 'Designer Handbag',
      sku: 'DH-006',
      price: 79.99,
      stock: 34,
      category: 'Fashion',
      status: 'In Stock',
      sales: 98,
      dateAdded: '2024-02-10',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=100&h=100&fit=crop',
      rating: 4.3
    },
    {
      id: 7,
      name: 'Wireless Speaker',
      sku: 'WS-007',
      price: 54.99,
      stock: 56,
      category: 'Electronics',
      status: 'In Stock',
      sales: 156,
      dateAdded: '2024-01-25',
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=100&h=100&fit=crop',
      rating: 4.5
    },
    {
      id: 8,
      name: 'Yoga Mat Premium',
      sku: 'YM-008',
      price: 19.99,
      stock: 0,
      category: 'Sports',
      status: 'Out of Stock',
      sales: 567,
      dateAdded: '2024-03-05',
      image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=100&h=100&fit=crop',
      rating: 4.9
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

  sortColumn: string = '';
  sortDirection: string = 'asc';
  searchQuery: string = '';
  selectedCategory: string = 'All';
  categories: string[] = ['All', 'Electronics', 'Fashion', 'Home & Garden', 'Sports'];

  ngOnInit() {}

  get filteredProducts() {
    let filtered = this.products;

    // Filter by search query
    if (this.searchQuery) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        product.sku.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (this.selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === this.selectedCategory);
    }

    return filtered;
  }

  sortTable(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.products.sort((a, b) => {
      let aValue = (a as any)[column];
      let bValue = (b as any)[column];

      if (column === 'price' || column === 'stock' || column === 'sales' || column === 'rating') {
        return this.sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      } else if (column === 'dateAdded') {
        return this.sortDirection === 'asc' 
          ? new Date(aValue).getTime() - new Date(bValue).getTime()
          : new Date(bValue).getTime() - new Date(aValue).getTime();
      } else {
        return this.sortDirection === 'asc' 
          ? aValue.localeCompare(bValue) 
          : bValue.localeCompare(aValue);
      }
    });
  }

  getSortIcon(column: string): string {
    if (this.sortColumn !== column) return 'unfold_more';
    return this.sortDirection === 'asc' ? 'arrow_upward' : 'arrow_downward';
  }

  editProduct(product: TableProduct) {
    console.log('Edit product:', product);
    // Implement edit functionality
  }

  deleteProduct(product: TableProduct) {
    if (confirm(`Are you sure you want to delete "${product.name}"?`)) {
      this.products = this.products.filter(p => p.id !== product.id);
    }
  }

  viewProduct(product: TableProduct) {
    console.log('View product:', product);
    // Implement view functionality
  }

  addProduct() {
    console.log('Add new product');
    // Implement add product functionality
  }

  exportProducts() {
    console.log('Export products');
    // Implement export functionality
  }

  getStatusClass(status: string): string {
    return status.toLowerCase().replace(' ', '-');
  }

  generateStars(rating: number): string {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    return '★'.repeat(fullStars) + (halfStar ? '½' : '') + '☆'.repeat(emptyStars);
  }

  getStockLevel(stock: number): string {
    if (stock === 0) return 'out-of-stock';
    if (stock < 10) return 'low-stock';
    if (stock < 25) return 'medium-stock';
    return 'high-stock';
  }

  // Add these missing methods that are referenced in the template
  getStockPercentage(stock: number): number {
    const maxStock = 100; // Assuming 100 is max stock for visualization
    return Math.min((stock / maxStock) * 100, 100);
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
}