import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Category {
  name: string;
  subcategories: string[];
}

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  @Output() itemSelected = new EventEmitter<string>();
  
  isDropdownOpen = false;
  activeCategory: string | null = null;

  openDropdown() {
    this.isDropdownOpen = true;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
    this.activeCategory = null;
  }

  setActiveCategory(category: string) {
    this.activeCategory = category;
  }

  clearActiveCategory() {
    this.activeCategory = null;
  }

  // Add the missing method
  getActiveSubcategories(): string[] {
    const category = this.categories.find(cat => cat.name === this.activeCategory);
    return category ? category.subcategories : [];
  }

  categories: Category[] = [
    {
      name: 'Electronics',
      subcategories: [
        'Smartphones',
        'Laptops & Computers',
        'Audio & Headphones',
        'Cameras & Photography',
        'Gaming',
        'Wearable Tech',
        'Accessories',
        'TV & Home Theater'
      ]
    },
    {
      name: 'Fashion',
      subcategories: [
        "Men's Clothing",
        "Women's Clothing",
        'Shoes & Footwear',
        'Accessories',
        'Bags & Luggage',
        'Jewelry',
        'Watches',
        'Sunglasses'
      ]
    },
    {
      name: 'Home & Garden',
      subcategories: [
        'Furniture',
        'Home Decor',
        'Kitchen & Dining',
        'Bedding & Bath',
        'Garden & Outdoor',
        'Lighting',
        'Storage & Organization',
        'Home Improvement'
      ]
    },
    {
      name: 'Sports',
      subcategories: [
        'Exercise & Fitness',
        'Outdoor Recreation',
        'Team Sports',
        'Water Sports',
        'Winter Sports',
        'Sports Apparel',
        'Sports Shoes',
        'Camping & Hiking'
      ]
    },
    {
      name: 'Beauty',
      subcategories: [
        'Skincare',
        'Makeup',
        'Haircare',
        'Fragrance',
        'Body Care',
        "Men's Grooming",
        'Tools & Accessories',
        'Bath & Body'
      ]
    },
    {
      name: 'Books',
      subcategories: [
        'Fiction',
        'Non-Fiction',
        "Children's Books",
        'Textbooks',
        'Business',
        'Science',
        'Technology',
        'Arts & Photography'
      ]
    },
    {
      name: 'Toys & Games',
      subcategories: [
        'Action Figures',
        'Board Games',
        'Puzzles',
        'Educational Toys',
        'Outdoor Play',
        'Video Games',
        'Collectibles',
        'Arts & Crafts'
      ]
    },
    {
      name: 'Automotive',
      subcategories: [
        'Car Electronics',
        'Tools & Equipment',
        'Parts & Accessories',
        'Car Care',
        'Motorcycle',
        'RV & Powersports',
        'Interior Accessories',
        'Exterior Accessories'
      ]
    }
  ];

  navigateTo(category: string) {
    this.itemSelected.emit(category);
    this.closeDropdown();
  }

  navigateToSubcategory(category: string, subcategory: string) {
    this.itemSelected.emit(`${category} - ${subcategory}`);
    this.closeDropdown();
  }
}