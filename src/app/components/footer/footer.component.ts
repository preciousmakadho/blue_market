import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() topRatedProducts: Product[] = [];
  @Input() specialOffers: Product[] = [];
  @Input() bestsellers: Product[] = [];

  marketplaceBrands: string[] = [
    'TECHNO', 'FASHIONISTA', 'HOMELIFE', 'SPORTPRO',
    'BEAUTYGLOW', 'READWELL', 'GADGETWORLD', 'LIFESTYLE',
    'URBANFIT', 'NATURALHOME', 'SMARTGEAR', 'PREMIUMSTYLE',
    'QUALITYGOODS', 'INNOVATE', 'MODERNLIVING', 'ESSENTIALS'
  ];

  generateStars(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i < Math.floor(rating) ? 1 : 0);
  }
}