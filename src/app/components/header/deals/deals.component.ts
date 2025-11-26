import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface DealCategory {
  name: string;
  subcategories: string[];
}

@Component({
  selector: 'app-deals',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent {
  @Output() itemSelected = new EventEmitter<string>();
  
  isDropdownOpen = false;
  activeDealCategory: string | null = null;

  openDropdown() {
    this.isDropdownOpen = true;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
    this.activeDealCategory = null;
  }

  setActiveDealCategory(category: string) {
    this.activeDealCategory = category;
  }

  clearActiveDealCategory() {
    this.activeDealCategory = null;
  }

  getActiveSubcategories(): string[] {
    const category = this.dealCategories.find(cat => cat.name === this.activeDealCategory);
    return category ? category.subcategories : [];
  }

  dealCategories: DealCategory[] = [
    {
      name: "Today's Deals",
      subcategories: [
        'Limited Time Offers',
        'Daily Specials',
        'Flash Sales',
        'Lightning Deals',
        'Deal of the Day',
        'Last Chance Offers',
        'Price Drops',
        'Clearance Items'
      ]
    },
    {
      name: 'Flash Sales',
      subcategories: [
        'Electronics Flash',
        'Fashion Flash',
        'Home & Kitchen Flash',
        'Beauty Flash',
        'Sports Flash',
        'Toy Flash Sales',
        'Book Deals',
        'Automotive Flash'
      ]
    },
    {
      name: 'Seasonal Offers',
      subcategories: [
        'Summer Sales',
        'Winter Clearance',
        'Spring Specials',
        'Fall Deals',
        'Holiday Specials',
        'Back to School',
        'Black Friday',
        'Cyber Monday'
      ]
    },
    {
      name: 'Clearance',
      subcategories: [
        'Final Clearance',
        'Overstock Deals',
        'Discontinued Items',
        'Warehouse Clearance',
        'Last Season Fashion',
        'Open Box Deals',
        'Refurbished Items',
        'Bulk Discounts'
      ]
    },
    {
      name: 'Bundle Deals',
      subcategories: [
        'Tech Bundles',
        'Fashion Sets',
        'Home Bundles',
        'Beauty Kits',
        'Sports Packages',
        'Gaming Bundles',
        'Office Packages',
        'Family Bundles'
      ]
    },
    {
      name: 'Member Exclusive',
      subcategories: [
        'VIP Early Access',
        'Member-Only Prices',
        'Loyalty Rewards',
        'Premium Deals',
        'First Look Sales',
        'Exclusive Coupons',
        'Special Discounts',
        'Bonus Points'
      ]
    },
    {
      name: 'Brand Offers',
      subcategories: [
        'Apple Deals',
        'Samsung Offers',
        'Nike Sales',
        'Adidas Promotions',
        'Sony Discounts',
        'Dell Specials',
        'HP Deals',
        'LG Promotions'
      ]
    },
    {
      name: 'Discount Categories',
      subcategories: [
        'Up to 50% Off',
        'Up to 70% Off',
        'Up to 90% Off',
        'Buy 1 Get 1 Free',
        'Buy 2 Get 1 Free',
        'Free Shipping',
        'Extra 10% Off',
        'Student Discounts'
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