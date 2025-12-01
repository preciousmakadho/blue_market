import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface PromoBanner {
  id: number;
  title: string;
  description: string;
  detail: string;
  category: string;
  image: string;
  backgroundColor: string;
  textColor: string;
  buttonText: string;
  route: string;
}

@Component({
  selector: 'app-promo-banners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promo-banners.component.html',
  styleUrls: ['./promo-banners.component.css']
})
export class PromoBannersComponent implements OnInit, OnDestroy {
  promoBanners: PromoBanner[] = [
    {
      id: 1,
      title: 'TECH WEEK SALE',
      description: 'Latest gadgets and electronics',
      detail: 'Up to 50% off on selected items',
      category: 'tech',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      backgroundColor: '#2D2D2D',
      textColor: '#2196F3',
      buttonText: 'Shop Now',
      route: '/shop/category/electronics'
    },
    {
      id: 2,
      title: 'FASHION DEALS',
      description: 'New season collection',
      detail: 'Fresh styles for every occasion',
      category: 'fashion',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      backgroundColor: 'linear-gradient(135deg, #1565C0 0%, #2D2D2D 100%)',
      textColor: '#2196F3',
      buttonText: 'Shop Now',
      route: '/shop/category/fashion'
    },
    {
      id: 3,
      title: 'HOME & GARDEN',
      description: 'Refresh your living space',
      detail: 'Modern furniture and decor up to 40% off',
      category: 'home',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      backgroundColor: 'linear-gradient(135deg, #388E3C 0%, #2D2D2D 100%)',
      textColor: '#4CAF50',
      buttonText: 'Explore',
      route: '/shop/category/home-garden'
    },
    {
      id: 4,
      title: 'SPORTS GEAR',
      description: 'Get fit with premium equipment',
      detail: 'Special prices on fitness gear',
      category: 'sports',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      backgroundColor: 'linear-gradient(135deg, #D32F2F 0%, #2D2D2D 100%)',
      textColor: '#FF5252',
      buttonText: 'Shop Gear',
      route: '/shop/category/sports'
    },
    {
      id: 5,
      title: 'BEAUTY ESSENTIALS',
      description: 'Premium skincare and makeup',
      detail: 'Buy 1 get 1 free on selected items',
      category: 'beauty',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      backgroundColor: 'linear-gradient(135deg, #7B1FA2 0%, #2D2D2D 100%)',
      textColor: '#E91E63',
      buttonText: 'Shop Beauty',
      route: '/shop/category/beauty'
    }
  ];

  currentBanners: PromoBanner[] = [];
  private currentIndex = 0;
  private bannerInterval: any;
  private readonly BANNERS_TO_SHOW = 2;
  private readonly ROTATION_INTERVAL = 4000; // 4 seconds

  // Update the type to be more specific and fix the TypeScript error
  fallbackImages: Record<string, string> = {
    'tech': 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
    'fashion': 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
    'home': 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
    'sports': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
    'beauty': 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80'
  };

  // Default fallback image
  private defaultFallbackImage = 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80';

  ngOnInit(): void {
    // Initialize with first two banners
    this.currentBanners = this.promoBanners.slice(0, this.BANNERS_TO_SHOW);
    
    // Start banner rotation
    this.startBannerRotation();
  }

  ngOnDestroy(): void {
    this.stopBannerRotation();
  }

  startBannerRotation(): void {
    this.bannerInterval = setInterval(() => {
      this.rotateBanners();
    }, this.ROTATION_INTERVAL);
  }

  stopBannerRotation(): void {
    if (this.bannerInterval) {
      clearInterval(this.bannerInterval);
    }
  }

  rotateBanners(): void {
    this.currentIndex = (this.currentIndex + 1) % this.promoBanners.length;
    
    // Get the next two banners to show
    const nextBanners: PromoBanner[] = [];
    for (let i = 0; i < this.BANNERS_TO_SHOW; i++) {
      const index = (this.currentIndex + i) % this.promoBanners.length;
      nextBanners.push(this.promoBanners[index]);
    }
    
    this.currentBanners = nextBanners;
  }

  goToBanner(index: number): void {
    this.currentIndex = index;
    const nextBanners: PromoBanner[] = [];
    for (let i = 0; i < this.BANNERS_TO_SHOW; i++) {
      const bannerIndex = (this.currentIndex + i) % this.promoBanners.length;
      nextBanners.push(this.promoBanners[bannerIndex]);
    }
    this.currentBanners = nextBanners;
    
    // Reset the interval
    this.stopBannerRotation();
    this.startBannerRotation();
  }

  isBannerActive(banner: PromoBanner): boolean {
    return this.currentBanners.some(b => b.id === banner.id);
  }

  getBannerClasses(banner: PromoBanner): string {
    return `promo-banner ${banner.category}`;
  }

  getBannerStyle(banner: PromoBanner): any {
    return {
      'background': banner.backgroundColor
    };
  }

  getTitleStyle(banner: PromoBanner): any {
    return {
      'color': banner.textColor
    };
  }

  // Update this method to use bracket notation
  onImageError(event: Event, banner: PromoBanner): void {
    const imgElement = event.target as HTMLImageElement;
    
    // Use bracket notation to access the property
    const fallbackImage = this.fallbackImages[banner.category];
    
    if (fallbackImage) {
      imgElement.src = fallbackImage;
    } else {
      imgElement.src = this.defaultFallbackImage;
    }
  }

  navigateTo(banner: PromoBanner): void {
    console.log('Navigating to:', banner.route);
  }
}