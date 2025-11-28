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
            { name: 'Dishwashers', route: '/category/appliances/dishwashers' },
            { name: 'Coffee Makers', route: '/category/appliances/coffee-makers' }
          ]
        },
        {
          title: 'Home Appliances',
          items: [
            { name: 'Washing Machines', route: '/category/appliances/washing-machines' },
            { name: 'Dryers', route: '/category/appliances/dryers' },
            { name: 'Air Conditioners', route: '/category/appliances/air-conditioners' },
            { name: 'Vacuum Cleaners', route: '/category/appliances/vacuums' },
            { name: 'Water Heaters', route: '/category/appliances/water-heaters' }
          ]
        },
        {
          title: 'Small Appliances',
          items: [
            { name: 'Blenders & Mixers', route: '/category/appliances/blenders' },
            { name: 'Toasters & Kettles', route: '/category/appliances/toasters' },
            { name: 'Food Processors', route: '/category/appliances/food-processors' },
            { name: 'Irons & Steamers', route: '/category/appliances/irons' }
          ]
        }
      ],
      featuredStores: [
        { name: 'Samsung Home', route: '/store/samsung-home' },
        { name: 'LG Appliances', route: '/store/lg-appliances' },
        { name: 'Bosch Premium', route: '/store/bosch-premium' },
        { name: 'Whirlpool', route: '/store/whirlpool' }
      ],
      promo: {
        badge: 'Smart Home',
        title: 'UPGRADE YOUR KITCHEN',
        description: 'Latest smart appliances with energy efficiency',
        buttonText: 'SHOP NOW',
        route: '/category/smart-appliances',
        image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      }
    },
    {
      id: 'camping-outdoor',
      name: 'Camping & Outdoor',
      icon: '🏕️',
      subcategories: [
        {
          title: 'Camping & Outdoor',
          items: [
            { name: 'New in Camping', route: '/category/camping/new' },
            { name: 'All Camping', route: '/category/camping/all' },
            { name: 'Tents & Shelters', route: '/category/camping/tents' },
            { name: 'Camping Furniture', route: '/category/camping/furniture' },
            { name: 'Lighting & Gadgets', route: '/category/camping/lighting' }
          ]
        },
        {
          title: 'Sleeping',
          items: [
            { name: 'Sleeping Bags', route: '/category/camping/sleeping-bags' },
            { name: 'Air Mattresses', route: '/category/camping/mattresses' },
            { name: 'Camping Pillows', route: '/category/camping/pillows' },
            { name: 'Coolers & Refrigeration', route: '/category/camping/coolers' }
          ]
        },
        {
          title: 'Outdoor Activities',
          items: [
            { name: 'All Outdoor Activities', route: '/category/outdoor/activities' },
            { name: 'Beach & Water Activities', route: '/category/outdoor/beach' },
            { name: 'Fishing', route: '/category/outdoor/fishing' },
            { name: 'Hiking', route: '/category/outdoor/hiking' },
            { name: 'Hunting', route: '/category/outdoor/hunting' }
          ]
        }
      ],
      featuredStores: [
        { name: 'Campground', route: '/store/campground' },
        { name: 'Kaufmann', route: '/store/kaufmann' },
        { name: 'Basecamp', route: '/store/basecamp' },
        { name: 'Lifetime', route: '/store/lifetime' }
      ],
      promo: {
        badge: 'OUTDOOR ADVENTURE',
        title: 'GEAR UP FOR YOUR NEXT TRIP',
        description: 'Premium camping gear for unforgettable adventures',
        buttonText: 'EXPLORE NOW',
        route: '/category/camping-gear',
        image: 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
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
            { name: 'Headphones', route: '/category/electronics/headphones' },
            { name: 'Phone Cases', route: '/category/electronics/phone-cases' }
          ]
        },
        {
          title: 'Computers',
          items: [
            { name: 'Laptops', route: '/category/electronics/laptops' },
            { name: 'Desktops', route: '/category/electronics/desktops' },
            { name: 'Monitors', route: '/category/electronics/monitors' },
            { name: 'Printers', route: '/category/electronics/printers' },
            { name: 'Computer Accessories', route: '/category/electronics/computer-accessories' }
          ]
        },
        {
          title: 'Audio & Video',
          items: [
            { name: 'TVs', route: '/category/electronics/tvs' },
            { name: 'Speakers', route: '/category/electronics/speakers' },
            { name: 'Soundbars', route: '/category/electronics/soundbars' },
            { name: 'Gaming Consoles', route: '/category/electronics/gaming-consoles' }
          ]
        }
      ],
      featuredStores: [
        { name: 'Apple Store', route: '/store/apple' },
        { name: 'Samsung Experience', route: '/store/samsung' },
        { name: 'Sony Premium', route: '/store/sony' },
        { name: 'LG Electronics', route: '/store/lg-electronics' }
      ],
      promo: {
        badge: 'Latest Tech',
        title: 'CUTTING-EDGE ELECTRONICS',
        description: 'Discover the latest in technology innovation',
        buttonText: 'EXPLORE NOW',
        route: '/category/latest-electronics',
        image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      }
    },
    {
      id: 'clothing',
      name: 'Clothing & Shoes',
      icon: '👕',
      subcategories: [
        {
          title: "Men's Fashion",
          items: [
            { name: 'Shirts & Tops', route: '/category/fashion/mens-shirts' },
            { name: 'Pants & Jeans', route: '/category/fashion/mens-pants' },
            { name: 'Shoes', route: '/category/fashion/mens-shoes' },
            { name: 'Accessories', route: '/category/fashion/mens-accessories' },
            { name: 'Sportswear', route: '/category/fashion/mens-sportswear' }
          ]
        },
        {
          title: "Women's Fashion",
          items: [
            { name: 'Dresses & Skirts', route: '/category/fashion/womens-dresses' },
            { name: 'Tops & Blouses', route: '/category/fashion/womens-tops' },
            { name: 'Shoes', route: '/category/fashion/womens-shoes' },
            { name: 'Bags & Accessories', route: '/category/fashion/womens-accessories' },
            { name: 'Sportswear', route: '/category/fashion/womens-sportswear' }
          ]
        },
        {
          title: 'Kids & Babies',
          items: [
            { name: "Boys' Clothing", route: '/category/fashion/boys-clothing' },
            { name: "Girls' Clothing", route: '/category/fashion/girls-clothing' },
            { name: 'Baby Clothing', route: '/category/fashion/baby-clothing' },
            { name: 'Kids Shoes', route: '/category/fashion/kids-shoes' }
          ]
        }
      ],
      featuredStores: [
        { name: 'Premium Brands', route: '/store/premium-brands' },
        { name: 'Sportswear', route: '/store/sportswear' },
        { name: 'Designer Collection', route: '/store/designer' },
        { name: 'Fast Fashion', route: '/store/fast-fashion' }
      ],
      promo: {
        badge: 'New Collection',
        title: 'TRENDING STYLES 2024',
        description: 'Fresh styles for every season and occasion',
        buttonText: 'SHOP FASHION',
        route: '/category/new-fashion',
        image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      }
    },
    {
      id: 'home-garden',
      name: 'Garden, Pool & Patio',
      icon: '🌿',
      subcategories: [
        {
          title: 'Garden & Outdoor',
          items: [
            { name: 'New In Garden', route: '/category/garden/new' },
            { name: 'All Garden', route: '/category/garden/all' },
            { name: 'Gardening Tools', route: '/category/garden/tools' },
            { name: 'Seeds & Bulbs', route: '/category/garden/seeds' },
            { name: 'Garden Storage', route: '/category/garden/storage' }
          ]
        },
        {
          title: 'Pool & Patio',
          items: [
            { name: 'All Pool', route: '/category/pool/all' },
            { name: 'Pool Cleaners', route: '/category/pool/cleaners' },
            { name: 'Pool Inflatables', route: '/category/pool/inflatables' },
            { name: 'Patio Furniture', route: '/category/patio/furniture' },
            { name: 'Patio Heaters', route: '/category/patio/heaters' }
          ]
        },
        {
          title: 'Outdoor Living',
          items: [
            { name: 'All Braai', route: '/category/braai/all' },
            { name: 'Charcoal Braais', route: '/category/braai/charcoal' },
            { name: 'Gas Braais', route: '/category/braai/gas' },
            { name: 'Braai Accessories', route: '/category/braai/accessories' },
            { name: 'Outdoor Lighting', route: '/category/outdoor/lighting' }
          ]
        }
      ],
      featuredStores: [
        { name: 'Leroy Merlin', route: '/store/leroy-merlin' },
        { name: 'Calore Group', route: '/store/calore-group' },
        { name: 'Fire Up', route: '/store/fire-up' },
        { name: 'Gardena', route: '/store/gardena' }
      ],
      promo: {
        badge: 'SUMMER READY',
        title: 'CREATE YOUR OUTDOOR OASIS',
        description: 'Transform your outdoor space with our premium collection',
        buttonText: 'SHOP OUTDOOR',
        route: '/category/outdoor-living',
        image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      }
    },
    {
      id: 'automotive',
      name: 'Automotive & DIY',
      icon: '🚗',
      subcategories: [
        {
          title: 'Auto Parts',
          items: [
            { name: 'Engine Parts', route: '/category/automotive/engine' },
            { name: 'Brakes & Suspension', route: '/category/automotive/brakes' },
            { name: 'Lighting & Electrical', route: '/category/automotive/lighting' },
            { name: 'Tools & Equipment', route: '/category/automotive/tools' }
          ]
        },
        {
          title: 'DIY & Tools',
          items: [
            { name: 'Power Tools', route: '/category/diy/power-tools' },
            { name: 'Hand Tools', route: '/category/diy/hand-tools' },
            { name: 'Paint & Supplies', route: '/category/diy/paint' },
            { name: 'Hardware', route: '/category/diy/hardware' }
          ]
        }
      ],
      featuredStores: [
        { name: 'AutoPro', route: '/store/autopro' },
        { name: 'ToolMaster', route: '/store/toolmaster' },
        { name: 'DIY Experts', route: '/store/diy-experts' }
      ],
      promo: {
        badge: 'PRO GRADE',
        title: 'PROFESSIONAL TOOLS & PARTS',
        description: 'Everything for your automotive and DIY projects',
        buttonText: 'SHOP NOW',
        route: '/category/automotive-tools',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
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