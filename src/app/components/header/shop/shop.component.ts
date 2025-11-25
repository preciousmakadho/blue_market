import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  @Output() itemSelected = new EventEmitter<string>();
  
  isDropdownOpen = false;

  openDropdown() {
    this.isDropdownOpen = true;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  shopMenuItems = [
    'Category',
    'Shop Grid',
    'Shop List', 
    'Shop Table',
    'Shop Right Sidebar',
    'Product',
    'Cart',
    'Checkout',
    'Order Success',
    'Wishlist',
    'Compare',
    'Track Order'
  ];

  navigateTo(item: string) {
    this.itemSelected.emit(item);
    this.closeDropdown();
  }
}