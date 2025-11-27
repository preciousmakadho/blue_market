import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchQuery: string = '';
  cartTotal: number = 0;
  cartItemCount: number = 0;
  mobileMenuOpen: boolean = false;
  
  // Dropdown states
  accountDropdownOpen: boolean = false;
  cartDropdownOpen: boolean = false;
  aboutDropdownOpen: boolean = false;
  shopDropdownOpen: boolean = false;
  vendorsDropdownOpen: boolean = false;
  megaMenuDropdownOpen: boolean = false;
  blogDropdownOpen: boolean = false;
  pagesDropdownOpen: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Initialize cart with some demo data
    this.cartTotal = 44.98;
    this.cartItemCount = 2;
  }

  // Close all dropdowns when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    
    // Close dropdowns if click is outside
    if (!target.closest('.account')) {
      this.accountDropdownOpen = false;
    }
    if (!target.closest('.cart')) {
      this.cartDropdownOpen = false;
    }
  }

  // Navigation methods
  navigateTo(route: string): void {
    this.router.navigate([route]);
    this.mobileMenuOpen = false;
    this.closeAllDropdowns();
  }

  navigateToCart(): void {
    this.router.navigate(['/cart']);
    this.cartDropdownOpen = false;
  }

  navigateToWishlist(): void {
    this.router.navigate(['/wishlist']);
  }

  navigateToCompare(): void {
    this.router.navigate(['/compare']);
  }

  searchProducts(): void {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/search'], { 
        queryParams: { q: this.searchQuery.trim() } 
      });
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  // Dropdown toggle methods
  toggleAccountDropdown(): void {
    this.accountDropdownOpen = !this.accountDropdownOpen;
    if (this.accountDropdownOpen) {
      this.cartDropdownOpen = false;
    }
  }

  toggleCartDropdown(): void {
    this.cartDropdownOpen = !this.cartDropdownOpen;
    if (this.cartDropdownOpen) {
      this.accountDropdownOpen = false;
    }
  }

  closeAllDropdowns(): void {
    this.accountDropdownOpen = false;
    this.cartDropdownOpen = false;
    this.aboutDropdownOpen = false;
    this.shopDropdownOpen = false;
    this.vendorsDropdownOpen = false;
    this.megaMenuDropdownOpen = false;
    this.blogDropdownOpen = false;
    this.pagesDropdownOpen = false;
  }

  // Top bar actions
  toggleLanguage(): void {
    console.log('Toggle language');
    // Implement language toggle logic
  }

  toggleCurrency(): void {
    console.log('Toggle currency');
    // Implement currency toggle logic
  }

  // Cart management methods
  addToCart(price: number): void {
    this.cartTotal += price;
    this.cartItemCount++;
  }

  removeFromCart(price: number): void {
    this.cartTotal = Math.max(0, this.cartTotal - price);
    this.cartItemCount = Math.max(0, this.cartItemCount - 1);
  }

  updateCart(total: number, count: number): void {
    this.cartTotal = total;
    this.cartItemCount = count;
  }

  clearCart(): void {
    this.cartTotal = 0;
    this.cartItemCount = 0;
  }

  // Demo method to simulate adding items
  addDemoItems(): void {
    this.addToCart(19.99);
    this.addToCart(24.99);
  }
}