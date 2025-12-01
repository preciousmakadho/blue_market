import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ShopComponent } from '../header/shop/shop.component';
import { AccountComponent } from '../header/account/account.component';
import { CategoriesComponent } from '../header/categories/categories.component';
import { DealsComponent } from '../header/deals/deals.component';
import { BlogComponent } from '../header/blog/blog.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FashionComponent } from './fashion/fashion.component';
import { GardenComponent } from './garden/garden.component';
import { SportsComponent } from './sports/sports.component';
import { BeautyComponent } from './beauty/beauty.component';
import { BooksComponent } from './books/books.component';
import { ToysComponent } from './toys/toys.component';
import { AutomotiveComponent } from './automotive/automotive.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { CategorySidebarComponent } from './category-sidebar/category-sidebar.component';
import { ShopBrandsComponent, Brand } from './shop-brands/shop-brands.component';
import { PromoBannersComponent } from './promo-banners/promo-banners.component';

// Export interfaces for use in other components
export interface Product {
  id: number;
  sku: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badges: string[];
  category: string;
}

export interface BlogPost {
  id: number;
  title: string;
  image: string;
  category: string;
  date: string;
  author: string;
}

export interface Category {
  name: string;
  key: string;
  icon: string;
  subcategories: string[];
  productCount: number;
}

@Component({
  selector: 'app-marketplace',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    RouterModule,
    ShopComponent, 
    AccountComponent,
    CategoriesComponent,
    DealsComponent, 
    BlogComponent,
    HeaderComponent,
    FooterComponent,
    ElectronicsComponent,
    FashionComponent,
    GardenComponent,
    SportsComponent,
    BeautyComponent,
    BooksComponent,
    ToysComponent,
    AutomotiveComponent,
    FeaturedProductsComponent,
    CategorySidebarComponent,
    ShopBrandsComponent, 
    PromoBannersComponent
  ],
  templateUrl: './market-place.component.html',
  styleUrls: ['./market-place.component.css']
})
export class MarketplaceComponent implements OnInit, OnDestroy {
  searchQuery: string = '';
  selectedCategory: string = '';
  selectedPriceRange: string = '';
  selectedBrand: string = '';
  selectedRating: string = '';

  cartTotal: number = 0;
  cartItemCount: number = 0;

  selectedMainCategory: string = 'All';
  mainCategories: string[] = ['All', 'Electronics', 'Fashion', 'Home & Garden', 'Sports', 'Beauty', 'Books'];

  dealCountdown: any = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  private countdownInterval: any;
  private hoverTimeout: any;

  priceRanges: string[] = ['Under $25', '$25 - $50', '$50 - $100', '$100 - $200', 'Over $200'];
  brands: string[] = ['Apple', 'Samsung', 'Nike', 'Adidas', 'Sony', 'LG', 'Dell', 'HP'];
  ratings: string[] = ['4+ Stars', '3+ Stars', '2+ Stars', '1+ Star'];

  // Shop by Category data
  categories: Category[] = [
    {
      name: 'Electronics & Tech',
      key: 'electronics',
      icon: 'devices',
      subcategories: ['Smartphones', 'Laptops', 'Tablets', 'Headphones', 'Cameras', 'Smart Watches', 'Gaming Consoles', 'Accessories'],
      productCount: 245
    },
    {
      name: 'Fashion & Apparel',
      key: 'fashion',
      icon: 'checkroom',
      subcategories: ["Men's Clothing", "Women's Clothing", 'Shoes', 'Bags', 'Accessories', 'Jewelry', 'Watches', 'Sunglasses'],
      productCount: 189
    },
    {
      name: 'Home & Garden',
      key: 'garden',
      icon: 'home',
      subcategories: ['Furniture', 'Home Decor', 'Kitchen & Dining', 'Bed & Bath', 'Garden Tools', 'Outdoor Furniture', 'Lighting', 'Storage'],
      productCount: 156
    },
    {
      name: 'Sports & Outdoors',
      key: 'sports',
      icon: 'sports_basketball',
      subcategories: ['Exercise Equipment', 'Outdoor Gear', 'Team Sports', 'Fitness Accessories', 'Camping Gear', 'Water Sports', 'Winter Sports'],
      productCount: 98
    },
    {
      name: 'Beauty & Personal Care',
      key: 'beauty',
      icon: 'spa',
      subcategories: ['Skincare', 'Makeup', 'Hair Care', 'Fragrances', 'Personal Care', 'Beauty Tools', "Men's Grooming"],
      productCount: 134
    },
    {
      name: 'Books & Media',
      key: 'books',
      icon: 'menu_book',
      subcategories: ['Fiction', 'Non-Fiction', 'Textbooks', 'Children Books', 'eBooks', 'Audiobooks', 'Magazines'],
      productCount: 76
    },
    {
      name: 'Toys & Games',
      key: 'toys',
      icon: 'toys',
      subcategories: ['Action Figures', 'Board Games', 'Educational Toys', 'Puzzles', 'Outdoor Toys', 'Video Games', 'Collectibles'],
      productCount: 87
    },
    {
      name: 'Automotive',
      key: 'automotive',
      icon: 'directions_car',
      subcategories: ['Car Parts', 'Tools & Equipment', 'Car Care', 'Interior Accessories', 'Exterior Accessories', 'Electronics', 'Lighting'],
      productCount: 112
    }
  ];

  featuredProducts: Product[] = [
    {
      id: 1,
      sku: 'SKU-001',
      name: 'Wireless Bluetooth Headphones',
      price: 89.99,
      originalPrice: 129.99,
      rating: 4.5,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
      badges: ['SALE', 'HOT'],
      category: 'Electronics'
    },
    {
      id: 2,
      sku: 'SKU-002',
      name: 'Smart Fitness Watch',
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.8,
      reviews: 456,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
      badges: ['NEW'],
      category: 'Electronics'
    },
    {
      id: 3,
      sku: 'SKU-003',
      name: 'Premium Coffee Maker',
      price: 34.99,
      rating: 4.6,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop',
      badges: [],
      category: 'Home & Garden'
    },
    {
      id: 4,
      sku: 'SKU-004',
      name: 'Running Shoes',
      price: 299.99,
      originalPrice: 349.99,
      rating: 4.7,
      reviews: 345,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop',
      badges: ['SALE'],
      category: 'Fashion'
    },
    {
      id: 5,
      sku: 'SKU-005',
      name: 'Gaming Keyboard',
      price: 449.99,
      rating: 4.4,
      reviews: 123,
      image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=300&fit=crop',
      badges: ['NEW'],
      category: 'Electronics'
    },
    {
      id: 6,
      sku: 'SKU-006',
      name: 'Yoga Mat Premium',
      price: 19.99,
      originalPrice: 29.99,
      rating: 4.9,
      reviews: 567,
      image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=300&h=300&fit=crop',
      badges: ['HOT'],
      category: 'Sports'
    },
    {
      id: 7,
      sku: 'SKU-007',
      name: 'Designer Handbag',
      price: 79.99,
      rating: 4.3,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&h=300&fit=crop',
      badges: [],
      category: 'Fashion'
    },
    {
      id: 8,
      sku: 'SKU-008',
      name: 'Wireless Speaker',
      price: 54.99,
      originalPrice: 74.99,
      rating: 4.5,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop',
      badges: ['SALE'],
      category: 'Electronics'
    }
  ];

  newArrivals: Product[] = [
    {
      id: 9,
      sku: 'SKU-009',
      name: 'Smartphone Pro',
      price: 189.99,
      rating: 4.8,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop',
      badges: ['NEW'],
      category: 'Electronics'
    },
    {
      id: 10,
      sku: 'SKU-010',
      name: 'Winter Jacket',
      price: 69.99,
      originalPrice: 99.99,
      rating: 4.6,
      reviews: 178,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop',
      badges: ['SALE'],
      category: 'Fashion'
    },
    {
      id: 11,
      sku: 'SKU-011',
      name: 'Skincare Set',
      price: 39.99,
      rating: 4.7,
      reviews: 456,
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop',
      badges: ['HOT'],
      category: 'Beauty'
    },
    {
      id: 12,
      sku: 'SKU-012',
      name: 'Cookware Set',
      price: 129.99,
      rating: 4.5,
      reviews: 289,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop',
      badges: ['NEW'],
      category: 'Home & Garden'
    }
  ];

  topRatedProducts: Product[] = [
    {
      id: 13,
      sku: 'SKU-013',
      name: 'Laptop Stand',
      price: 24.99,
      rating: 4.9,
      reviews: 789,
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=200&h=200&fit=crop',
      badges: [],
      category: 'Electronics'
    },
    {
      id: 14,
      sku: 'SKU-014',
      name: 'Water Bottle',
      price: 29.99,
      rating: 4.8,
      reviews: 678,
      image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=200&h=200&fit=crop',
      badges: [],
      category: 'Sports'
    },
    {
      id: 15,
      sku: 'SKU-015',
      name: 'Desk Lamp',
      price: 149.99,
      rating: 4.9,
      reviews: 890,
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=200&h=200&fit=crop',
      badges: [],
      category: 'Home & Garden'
    }
  ];

  specialOffers: Product[] = [
    {
      id: 16,
      sku: 'SKU-016',
      name: 'Wireless Earbuds',
      price: 59.99,
      originalPrice: 89.99,
      rating: 4.7,
      reviews: 345,
      image: 'https://images.unsplash.com/photo-1590658165737-15a047b8b5e3?w=200&h=200&fit=crop',
      badges: ['SALE'],
      category: 'Electronics'
    },
    {
      id: 17,
      sku: 'SKU-017',
      name: 'Backpack',
      price: 299.99,
      originalPrice: 449.99,
      rating: 4.6,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop',
      badges: ['SALE'],
      category: 'Fashion'
    },
    {
      id: 18,
      sku: 'SKU-018',
      name: 'Plant Set',
      price: 79.99,
      originalPrice: 119.99,
      rating: 4.5,
      reviews: 456,
      image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=200&h=200&fit=crop',
      badges: ['SALE'],
      category: 'Home & Garden'
    }
  ];

  bestsellers: Product[] = [
    {
      id: 19,
      sku: 'SKU-019',
      name: 'Tablet',
      price: 199.99,
      rating: 4.8,
      reviews: 567,
      image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=200&h=200&fit=crop',
      badges: ['HOT'],
      category: 'Electronics'
    },
    {
      id: 20,
      sku: 'SKU-020',
      name: 'Running Shorts',
      price: 249.99,
      rating: 4.7,
      reviews: 432,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop',
      badges: ['HOT'],
      category: 'Sports'
    },
    {
      id: 21,
      sku: 'SKU-021',
      name: 'Book Collection',
      price: 179.99,
      rating: 4.6,
      reviews: 321,
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&h=200&fit=crop',
      badges: [],
      category: 'Books'
    }
  ];

  blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Top 10 Tech Gadgets You Need in 2024',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop',
      category: 'Tech Trends',
      date: 'Nov 20, 2024',
      author: 'John Smith'
    },
    {
      id: 2,
      title: 'Sustainable Fashion: Trends to Watch',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop',
      category: 'Fashion',
      date: 'Nov 18, 2024',
      author: 'Sarah Johnson'
    },
    {
      id: 3,
      title: 'Home Organization Tips for Modern Living',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
      category: 'Home & Garden',
      date: 'Nov 15, 2024',
      author: 'Mike Davis'
    },
    {
      id: 4,
      title: 'Best Fitness Equipment for Home Workouts',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      category: 'Fitness',
      date: 'Nov 12, 2024',
      author: 'Emily Brown'
    }
  ];

  // Brands data for the shop-brands component
  // In marketplace.component.ts, update the brands array:
marketplaceBrands: Brand[] = [
  {
    name: 'Apple',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png',
    route: '/shop/category/electronics?brand=apple'
  },
  {
    name: 'Samsung',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1280px-Samsung_Logo.svg.png',
    route: '/shop/category/electronics?brand=samsung'
  },
  {
    name: 'Nike',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/800px-Logo_NIKE.svg.png',
    route: '/shop/category/fashion?brand=nike'
  },
  {
    name: 'Adidas',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/800px-Adidas_Logo.svg.png',
    route: '/shop/category/fashion?brand=adidas'
  },
  {
    name: 'Sony',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/800px-Sony_logo.svg.png',
    route: '/shop/category/electronics?brand=sony'
  },
  {
    name: 'LG',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/LG_symbol.svg/800px-LG_symbol.svg.png',
    route: '/shop/category/electronics?brand=lg'
  },
  {
    name: 'Dell',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/800px-Dell_logo_2016.svg.png',
    route: '/shop/category/electronics?brand=dell'
  },
  {
    name: 'HP',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/800px-HP_logo_2012.svg.png',
    route: '/shop/category/electronics?brand=hp'
  },
  {
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/800px-Microsoft_logo_%282012%29.svg.png',
    route: '/shop/category/electronics?brand=microsoft'
  },
  {
    name: 'Canon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Canon_logo.svg/800px-Canon_logo.svg.png',
    route: '/shop/category/electronics?brand=canon'
  },
  {
    name: 'Puma',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Puma_logo.svg/800px-Puma_logo.svg.png',
    route: '/shop/category/fashion?brand=puma'
  },
  {
    name: 'Under Armour',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Under_Armour_logo.svg/800px-Under_Armour_logo.svg.png',
    route: '/shop/category/fashion?brand=under-armour'
  }
];

  wishlist: Set<number> = new Set();
  mobileMenuOpen: boolean = false;
  currentRoute: string = '';
  showShopContent: boolean = false;
  showAccountContent: boolean = false;

  // New properties for hover functionality
  expandedCategory: string | null = null;
  hoveredCategory: string | null = null;
  isCardHovered: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startCountdown();
    this.setupRouteTracking();
  }

  ngOnDestroy(): void {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
    if (this.hoverTimeout) {
      clearTimeout(this.hoverTimeout);
    }
  }

  // Category sidebar methods
  onCategoryHover(categoryKey: string): void {
    if (this.hoverTimeout) {
      clearTimeout(this.hoverTimeout);
    }
    this.hoveredCategory = categoryKey;
  }

  onCategoryLeave(): void {
    if (!this.isCardHovered) {
      this.hoverTimeout = setTimeout(() => {
        if (!this.isCardHovered) {
          this.hoveredCategory = null;
        }
      }, 300);
    }
  }

  onCardHover(): void {
    this.isCardHovered = true;
    if (this.hoverTimeout) {
      clearTimeout(this.hoverTimeout);
    }
  }

  onCardLeave(): void {
    this.isCardHovered = false;
    this.hoverTimeout = setTimeout(() => {
      if (!this.isCardHovered) {
        this.hoveredCategory = null;
      }
    }, 300);
  }

  onToggleCategory(categoryName: string): void {
    if (this.expandedCategory === categoryName) {
      this.expandedCategory = null;
    } else {
      this.expandedCategory = categoryName;
    }
  }

  onNavigateToCategory(categoryKey: string): void {
    const routeMap: { [key: string]: string } = {
      'electronics': '/shop/category/electronics',
      'fashion': '/shop/category/fashion',
      'garden': '/shop/category/home-garden',
      'sports': '/shop/category/sports',
      'beauty': '/shop/category/beauty',
      'books': '/shop/category/books',
      'toys': '/shop/category/toys-games',
      'automotive': '/shop/category/automotive',
      'all': '/shop/categories'
    };

    const route = routeMap[categoryKey];
    if (route) {
      this.router.navigate([route]);
    }
  }

  onNavigateToSubcategory(event: {categoryKey: string, subcategory: string}): void {
    const baseRouteMap: { [key: string]: string } = {
      'electronics': '/shop/category/electronics',
      'fashion': '/shop/category/fashion',
      'garden': '/shop/category/home-garden',
      'sports': '/shop/category/sports',
      'beauty': '/shop/category/beauty',
      'books': '/shop/category/books',
      'toys': '/shop/category/toys-games',
      'automotive': '/shop/category/automotive'
    };

    const baseRoute = baseRouteMap[event.categoryKey];
    if (baseRoute) {
      this.router.navigate([baseRoute], { 
        queryParams: { subcategory: event.subcategory.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-') } 
      });
    }
  }

  // Featured products methods
  onAddToCart(product: Product): void {
    this.cartTotal += product.price;
    this.cartItemCount++;
  }

  onToggleWishlist(productId: number): void {
    if (this.wishlist.has(productId)) {
      this.wishlist.delete(productId);
    } else {
      this.wishlist.add(productId);
    }
  }

  setupRouteTracking(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.url;
        this.updateContentVisibility();
      });

    this.currentRoute = this.router.url;
    this.updateContentVisibility();
  }

  updateContentVisibility(): void {
    this.showShopContent = this.currentRoute.includes('/shop') || 
                          this.currentRoute.includes('/product') ||
                          this.currentRoute.includes('/cart') ||
                          this.currentRoute.includes('/checkout') ||
                          this.currentRoute.includes('/wishlist') ||
                          this.currentRoute.includes('/compare') ||
                          this.currentRoute.includes('/track-order');

    this.showAccountContent = this.currentRoute.includes('/account');
  }

  // Navigation methods
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  navigateToShop(): void {
    this.router.navigate(['/shop']);
  }

  navigateToAccount(): void {
    this.router.navigate(['/account']);
  }

  navigateToCart(): void {
    this.router.navigate(['/cart']);
  }

  navigateToWishlist(): void {
    this.router.navigate(['/wishlist']);
  }

  navigateToCheckout(): void {
    this.router.navigate(['/checkout']);
  }

  navigateToProduct(productId: number): void {
    this.router.navigate(['/product', productId]);
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

  // Category navigation handler
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

    // Handle subcategories (format: "Category - Subcategory")
    if (item.includes(' - ')) {
      const [category, subcategory] = item.split(' - ');
      const baseRoute = routeMap[category];
      if (baseRoute) {
        this.router.navigate([baseRoute], { queryParams: { subcategory: subcategory.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-') } });
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

    // Handle subcategories (format: "Category - Subcategory")
    if (item.includes(' - ')) {
      const [category, subcategory] = item.split(' - ');
      const baseRoute = routeMap[category];
      if (baseRoute) {
        this.router.navigate([baseRoute], { queryParams: { subcategory: subcategory.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-') } });
      }
    } else {
      const route = routeMap[item];
      if (route) {
        this.router.navigate([route]);
      }
    }
  }

  // Existing methods
  startCountdown(): void {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);
    targetDate.setHours(23, 59, 59, 999);

    this.countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(this.countdownInterval);
        return;
      }

      this.dealCountdown.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.dealCountdown.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.dealCountdown.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.dealCountdown.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }, 1000);
  }

  addToCart(product: Product): void {
    this.cartTotal += product.price;
    this.cartItemCount++;
  }

  toggleWishlist(productId: number): void {
    if (this.wishlist.has(productId)) {
      this.wishlist.delete(productId);
    } else {
      this.wishlist.add(productId);
    }
  }

  isInWishlist(productId: number): boolean {
    return this.wishlist.has(productId);
  }

  filterByCategory(category: string): void {
    this.selectedMainCategory = category;
  }

  getFilteredProducts(): Product[] {
    if (this.selectedMainCategory === 'All') {
      return this.featuredProducts;
    }
    return this.featuredProducts.filter(p => p.category === this.selectedMainCategory);
  }

  searchProducts(): void {
    console.log('Searching for:', this.searchQuery);
  }

  applyFilters(): void {
    console.log('Applied filters:', {
      category: this.selectedCategory,
      priceRange: this.selectedPriceRange,
      brand: this.selectedBrand,
      rating: this.selectedRating
    });
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  generateStars(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i < Math.floor(rating) ? 1 : 0);
  }
}