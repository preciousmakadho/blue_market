import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../../../Services/product.interface';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent {
  @Input() products: Product[] = [];
  @Input() wishlist: Set<number> = new Set();
  @Output() addToCart = new EventEmitter<Product>();
  @Output() toggleWishlist = new EventEmitter<number>();

  generateStars(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i < Math.floor(rating) ? 1 : 0);
  }

  onAddToCart(product: Product): void {
    this.addToCart.emit(product);
  }

  onToggleWishlist(productId: number): void {
    this.toggleWishlist.emit(productId);
  }

  isInWishlist(productId: number): boolean {
    return this.wishlist.has(productId);
  }
}