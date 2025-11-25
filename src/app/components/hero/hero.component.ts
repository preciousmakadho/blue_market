import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  selectedCategory = '';
  selectedBrand = '';
  selectedType = '';
  selectedPriceRange = '';

  categories = ['Electronics', 'Home & Garden', 'Fashion', 'Sports', 'Automotive', 'Books', 'Health & Beauty'];
  brands = ['All Brands', 'Premium', 'Budget', 'Eco-Friendly', 'Latest Releases'];
  types = ['All Types', 'New Arrivals', 'On Sale', 'Best Sellers', 'Featured'];
  priceRanges = ['Any Price', 'Under $50', '$50 - $100', '$100 - $200', 'Over $200'];

  searchProducts() {
    // Implement search functionality
    console.log('Searching products...', {
      category: this.selectedCategory,
      brand: this.selectedBrand,
      type: this.selectedType,
      priceRange: this.selectedPriceRange
    });
  }
}