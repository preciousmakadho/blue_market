import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Output() itemSelected = new EventEmitter<string>();
  
  isDropdownOpen = false;

  openDropdown() {
    this.isDropdownOpen = true;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  accountMenuItems = [
    'Account',
    'Pages',
    'Login & Register',
    'Dashboard',
    'Garage',
    'Edit Profile',
    'Order History',
    'Order Details',
    'Address Book',
    'Edit Address',
    'Change Password'
  ];

  getIconForItem(item: string): string {
    const icons: { [key: string]: string } = {
      'Account': 'person',
      'Pages': 'description',
      'Login & Register': 'login',
      'Dashboard': 'dashboard',
      'Garage': 'garage',
      'Edit Profile': 'edit',
      'Order History': 'history',
      'Order Details': 'receipt_long',
      'Address Book': 'book',
      'Edit Address': 'edit_location',
      'Change Password': 'password'
    };
    return icons[item] ? icons[item] : '';
  }

  navigateTo(item: string) {
    this.itemSelected.emit(item);
    this.closeDropdown();
  }
}