import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface Brand {
  name: string;
  logo: string;
  route?: string;
}

@Component({
  selector: 'app-shop-brands',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './shop-brands.component.html',
  styleUrls: ['./shop-brands.component.css']
})
export class ShopBrandsComponent implements OnInit {
  @Input() brands: Brand[] = [];

  // Default brands with logos if none provided - ALL 12 BRANDS WITH FIXED LOGOS
  defaultBrands: Brand[] = [
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

  ngOnInit() {
    // Use provided brands or default ones
    if (!this.brands || this.brands.length === 0) {
      this.brands = [...this.defaultBrands];
    }
    console.log('Brands loaded:', this.brands.length);
  }

  navigateToBrand(brand: Brand): void {
    if (brand.route) {
      console.log('Navigating to brand:', brand.name);
    }
  }

  onImageError(event: any, brand: Brand): void {
    console.warn(`Failed to load logo for ${brand.name}`);
    event.target.style.display = 'none';
    
    // Create fallback with brand name
    const fallback = document.createElement('div');
    fallback.className = 'brand-fallback';
    fallback.textContent = brand.name;
    fallback.style.cssText = `
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f5f5f5;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 600;
      color: #666;
      text-align: center;
      padding: 5px;
    `;
    event.target.parentNode.appendChild(fallback);
  }
}