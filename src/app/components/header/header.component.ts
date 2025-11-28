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
  compareCount: number = 0;
  wishlistCount: number = 0;
  mobileMenuOpen: boolean = false;
  
  // Search category
  selectedCategory: string = 'All';
  categoryDropdownOpen: boolean = false;
  
  // Language selector
  selectedLanguage: string = 'en';
  selectedLanguageCode: string = 'EN';
  languageDropdownOpen: boolean = false;
  
  // Account slider
  accountSliderOpen: boolean = false;
  
  // Dropdown states
  categoriesDropdownOpen: boolean = false;
  homeDropdownOpen: boolean = false;
  shopDropdownOpen: boolean = false;
  vendorsDropdownOpen: boolean = false;
  megaMenuDropdownOpen: boolean = false;
  blogDropdownOpen: boolean = false;
  pagesDropdownOpen: boolean = false;

  // Active department for categories dropdown
  activeDepartment: any = null;

  // Departments data
  departments = [
    {
      id: 'appliances',
      name: 'Appliances',
      icon: '🏠',
      subcategories: [
        {
          title: 'Kitchen Appliances',
          items: [
            { name: 'Refrigerators', route: '/category/appliances/refrigerators' },
            { name: 'Ovens & Stoves', route: '/category/appliances/ovens' },
            { name: 'Microwaves', route: '/category/appliances/microwaves' },
            { name: 'Dishwashers', route: '/category/appliances/dishwashers' }
          ]
        },
        {
          title: 'Home Appliances',
          items: [
            { name: 'Washing Machines', route: '/category/appliances/washing-machines' },
            { name: 'Dryers', route: '/category/appliances/dryers' },
            { name: 'Air Conditioners', route: '/category/appliances/air-conditioners' },
            { name: 'Vacuum Cleaners', route: '/category/appliances/vacuums' }
          ]
        }
      ],
      featuredStores: [
        { name: 'Samsung Home', route: '/store/samsung-home' },
        { name: 'LG Appliances', route: '/store/lg-appliances' },
        { name: 'Bosch Premium', route: '/store/bosch-premium' }
      ],
      promo: {
        badge: 'Smart Home',
        title: 'UPGRADE YOUR KITCHEN',
        buttonText: 'SHOP NOW',
        route: '/category/smart-appliances',
        image: 'Assets/appliances-promo.jpg'
      }
    },
    {
      id: 'toys',
      name: 'Toys',
      icon: '🧸',
      subcategories: [
        {
          title: 'Toys',
          items: [
            { name: 'New in Toys', route: '/category/toys/new' },
            { name: 'All Toys', route: '/category/toys/all' },
            { name: 'Action Figures & Dolls', route: '/category/toys/action-figures' },
            { name: 'Arts & Crafts', route: '/category/toys/arts-crafts' }
          ]
        },
        {
          title: '',
          items: [
            { name: 'Board Games', route: '/category/toys/board-games' },
            { name: 'Card Games', route: '/category/toys/card-games' },
            { name: 'Indoor Play', route: '/category/toys/indoor-play' },
            { name: 'Outdoor Play', route: '/category/toys/outdoor-play' }
          ]
        },
        {
          title: '',
          items: [
            { name: 'Kids Party Supplies', route: '/category/toys/party-supplies' },
            { name: 'Puzzles', route: '/category/toys/puzzles' },
            { name: 'Smart Toys', route: '/category/toys/smart-toys' }
          ]
        }
      ],
      featuredStores: [
        { name: 'The Character Shop', route: '/store/character-shop' },
        { name: 'Disney', route: '/store/disney' },
        { name: 'Fisher Price', route: '/store/fisher-price' },
        { name: 'Hasbro', route: '/store/hasbro' },
        { name: 'LEGO®', route: '/store/lego' }
      ],
      promo: {
        badge: 'DEALS that THRILL',
        title: 'CREATIVE PLAY FOR ALL AGES',
        buttonText: 'SHOP NOW',
        route: '/category/featured-toys',
        image: 'Assets/toys-promo.jpg'
      }
    },
    {
      id: 'electronics',
      name: 'Electronics',
      icon: '📱',
      subcategories: [
        {
          title: 'Mobile & Accessories',
          items: [
            { name: 'Smartphones', route: '/category/electronics/smartphones' },
            { name: 'Tablets', route: '/category/electronics/tablets' },
            { name: 'Smartwatches', route: '/category/electronics/smartwatches' },
            { name: 'Headphones', route: '/category/electronics/headphones' }
          ]
        },
        {
          title: 'Computers',
          items: [
            { name: 'Laptops', route: '/category/electronics/laptops' },
            { name: 'Desktops', route: '/category/electronics/desktops' },
            { name: 'Monitors', route: '/category/electronics/monitors' },
            { name: 'Printers', route: '/category/electronics/printers' }
          ]
        }
      ],
      featuredStores: [
        { name: 'Apple Store', route: '/store/apple' },
        { name: 'Samsung Experience', route: '/store/samsung' },
        { name: 'Sony Premium', route: '/store/sony' }
      ],
      promo: {
        badge: 'Latest Tech',
        title: 'CUTTING-ELECTRONICS',
        buttonText: 'EXPLORE NOW',
        route: '/category/latest-electronics',
        image: 'Assets/electronics-promo.jpg'
      }
    },
    {
      id: 'fashion',
      name: 'Clothing & Shoes',
      icon: '👕',
      subcategories: [
        {
          title: "Men's Fashion",
          items: [
            { name: 'Shirts & Tops', route: '/category/fashion/mens-shirts' },
            { name: 'Pants & Jeans', route: '/category/fashion/mens-pants' },
            { name: 'Shoes', route: '/category/fashion/mens-shoes' },
            { name: 'Accessories', route: '/category/fashion/mens-accessories' }
          ]
        },
        {
          title: "Women's Fashion",
          items: [
            { name: 'Dresses & Skirts', route: '/category/fashion/womens-dresses' },
            { name: 'Tops & Blouses', route: '/category/fashion/womens-tops' },
            { name: 'Shoes', route: '/category/fashion/womens-shoes' },
            { name: 'Bags & Accessories', route: '/category/fashion/womens-accessories' }
          ]
        }
      ],
      featuredStores: [
        { name: 'Premium Brands', route: '/store/premium-brands' },
        { name: 'Sportswear', route: '/store/sportswear' },
        { name: 'Designer Collection', route: '/store/designer' }
      ],
      promo: {
        badge: 'New Collection',
        title: 'TRENDING STYLES 2024',
        buttonText: 'SHOP FASHION',
        route: '/category/new-fashion',
        image: 'Assets/fashion-promo.jpg'
      }
    },
    {
      id: 'home',
      name: 'Homeware',
      icon: '🛋️',
      subcategories: [
        {
          title: 'Furniture',
          items: [
            { name: 'Living Room', route: '/category/home/living-room' },
            { name: 'Bedroom', route: '/category/home/bedroom' },
            { name: 'Dining Room', route: '/category/home/dining-room' },
            { name: 'Office Furniture', route: '/category/home/office' }
          ]
        },
        {
          title: 'Home Decor',
          items: [
            { name: 'Lighting', route: '/category/home/lighting' },
            { name: 'Wall Art', route: '/category/home/wall-art' },
            { name: 'Rugs & Carpets', route: '/category/home/rugs' },
            { name: 'Curtains & Blinds', route: '/category/home/curtains' }
          ]
        }
      ],
      featuredStores: [
        { name: 'Home Essentials', route: '/store/home-essentials' },
        { name: 'Luxury Living', route: '/store/luxury-living' },
        { name: 'Modern Designs', route: '/store/modern-designs' }
      ],
      promo: {
        badge: 'Home Makeover',
        title: 'TRANSFORM YOUR SPACE',
        buttonText: 'DISCOVER',
        route: '/category/home-decor',
        image: 'Assets/home-promo.jpg'
      }
    }
  ];

  // Default categories for when no department is selected
  defaultCategories = [
    { name: 'Electronics', icon: '📱', route: '/category/electronics' },
    { name: 'Fashion', icon: '👕', route: '/category/fashion' },
    { name: 'Home & Kitchen', icon: '🏠', route: '/category/home-kitchen' },
    { name: 'Sports', icon: '⚽', route: '/category/sports' },
    { name: 'Books', icon: '📚', route: '/category/books' },
    { name: 'Beauty', icon: '💄', route: '/category/beauty' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Initialize with demo data
    this.cartTotal = 44.98;
    this.cartItemCount = 2;
    this.compareCount = 0;
    this.wishlistCount = 0;
  }

  // Close all dropdowns when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    
    // Close dropdowns if click is outside
    if (!target.closest('.browse-categories-wrapper') && !target.closest('.categories-mega-dropdown')) {
      this.categoriesDropdownOpen = false;
      this.activeDepartment = null;
    }
    if (!target.closest('.category-dropdown-wrapper')) {
      this.categoryDropdownOpen = false;
    }
    if (!target.closest('.language-selector')) {
      this.languageDropdownOpen = false;
    }
    if (!target.closest('.nav-item')) {
      this.homeDropdownOpen = false;
      this.shopDropdownOpen = false;
      this.vendorsDropdownOpen = false;
      this.megaMenuDropdownOpen = false;
      this.blogDropdownOpen = false;
      this.pagesDropdownOpen = false;
    }
  }

  // Navigation methods
  navigateTo(route: string): void {
    this.router.navigate([route]);
    this.mobileMenuOpen = false;
    this.closeAllDropdowns();
    this.accountSliderOpen = false;
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

  // Subcategory navigation
  navigateToSubcategory(route: string): void {
    this.navigateTo(route);
    this.categoriesDropdownOpen = false;
  }

  // Store navigation
  navigateToStore(route: string): void {
    this.navigateTo(route);
    this.categoriesDropdownOpen = false;
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
  toggleCategoriesDropdown(): void {
    this.categoriesDropdownOpen = !this.categoriesDropdownOpen;
    if (!this.categoriesDropdownOpen) {
      this.activeDepartment = null;
    }
  }

  toggleCategoryDropdown(): void {
    this.categoryDropdownOpen = !this.categoryDropdownOpen;
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.categoryDropdownOpen = false;
  }

  toggleLanguageDropdown(): void {
    this.languageDropdownOpen = !this.languageDropdownOpen;
  }

  selectLanguage(code: string, displayCode: string): void {
    this.selectedLanguage = code;
    this.selectedLanguageCode = displayCode;
    this.languageDropdownOpen = false;
    console.log('Language changed to:', code);
  }

  // Department methods
  setActiveDepartment(department: any): void {
    this.activeDepartment = department;
  }

  // Account slider methods
  toggleAccountSlider(): void {
    this.accountSliderOpen = !this.accountSliderOpen;
    if (this.accountSliderOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('slider-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('slider-open');
    }
  }

  closeAllDropdowns(): void {
    this.categoriesDropdownOpen = false;
    this.homeDropdownOpen = false;
    this.shopDropdownOpen = false;
    this.vendorsDropdownOpen = false;
    this.megaMenuDropdownOpen = false;
    this.blogDropdownOpen = false;
    this.pagesDropdownOpen = false;
    this.languageDropdownOpen = false;
    this.categoryDropdownOpen = false;
    this.activeDepartment = null;
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
}