import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ShopComponent } from './shop/shop.component';
import { AccountComponent } from './account/account.component';
import { CategoriesComponent } from './categories/categories.component';
import { DealsComponent } from './deals/deals.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ShopComponent,
    AccountComponent,
    CategoriesComponent,
    DealsComponent
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchQuery: string = '';
  cartTotal: number = 0;
  cartItemCount: number = 0;
  mobileMenuOpen: boolean = false;
  wishlist: Set<number> = new Set();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  // Navigation methods
  navigateTo(route: string): void {
    this.router.navigate([route]);
    this.mobileMenuOpen = false;
  }

  navigateToCart(): void {
    this.router.navigate(['/cart']);
  }

  navigateToWishlist(): void {
    this.router.navigate(['/wishlist']);
  }

  navigateToCompare(): void {
    this.router.navigate(['/compare']);
  }

  searchProducts(): void {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/search'], { queryParams: { q: this.searchQuery } });
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  // Shop navigation handler
  onShopItemSelected(item: string): void {
    const routeMap: { [key: string]: string } = {
      'Category': '/shop/category',
      'Shop Grid': '/shop/grid',
      'Shop List': '/shop/list',
      'Shop Table': '/shop/table',
      'Shop Right Sidebar': '/shop/sidebar',
      'Product': '/shop',
      'Cart': '/cart',
      'Checkout': '/checkout',
      'Order Success': '/order-success',
      'Wishlist': '/wishlist',
      'Compare': '/compare',
      'Track Order': '/track-order'
    };

    const route = routeMap[item];
    if (route) {
      this.router.navigate([route]);
    }
  }

  // Account navigation handler
  onAccountItemSelected(item: string): void {
    const routeMap: { [key: string]: string } = {
      'Account': '/account',
      'Pages': '/account',
      'Login & Register': '/account/login',
      'Dashboard': '/account/dashboard',
      'Garage': '/account/garage',
      'Edit Profile': '/account/profile',
      'Order History': '/account/orders',
      'Order Details': '/account/order-details',
      'Address Book': '/account/address-book',
      'Edit Address': '/account/edit-address',
      'Change Password': '/account/change-password'
    };

    const route = routeMap[item];
    if (route) {
      this.router.navigate([route]);
    }
  }

  onCategorySelected(item: string) {
    const routeMap: { [key: string]: string } = {
      'Electronics': '/shop/category/electronics',
      'Fashion': '/shop/category/fashion',
      'Home & Garden': '/shop/category/home-garden',
      'Sports': '/shop/category/sports',
      'Beauty': '/shop/category/beauty',
      'Books': '/shop/category/books',
      'Toys & Games': '/shop/category/toys-games',
      'Automotive': '/shop/category/automotive',
      'All Categories': '/shop/categories'
    };

    if (item.includes(' - ')) {
      const [category, subcategory] = item.split(' - ');
      const baseRoute = routeMap[category];
      if (baseRoute) {
        this.router.navigate([baseRoute], { 
          queryParams: { subcategory: subcategory.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-') } 
        });
      }
    } else {
      const route = routeMap[item];
      if (route) {
        this.router.navigate([route]);
      }
    }
  }

  onDealSelected(item: string) {
    const routeMap: { [key: string]: string } = {
      "Today's Deals": '/deals/today',
      'Flash Sales': '/deals/flash',
      'Seasonal Offers': '/deals/seasonal',
      'Clearance': '/deals/clearance',
      'Bundle Deals': '/deals/bundle',
      'Member Exclusive': '/deals/member',
      'Brand Offers': '/deals/brand',
      'Discount Categories': '/deals/discount',
      'All Deals': '/deals'
    };

    if (item.includes(' - ')) {
      const [category, subcategory] = item.split(' - ');
      const baseRoute = routeMap[category];
      if (baseRoute) {
        this.router.navigate([baseRoute], { 
          queryParams: { subcategory: subcategory.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-') } 
        });
      }
    } else {
      const route = routeMap[item];
      if (route) {
        this.router.navigate([route]);
      }
    }
  }

  // Cart management methods
  addToCart(price: number): void {
    this.cartTotal += price;
    this.cartItemCount++;
  }

  updateCart(total: number, count: number): void {
    this.cartTotal = total;
    this.cartItemCount = count;
  }
}