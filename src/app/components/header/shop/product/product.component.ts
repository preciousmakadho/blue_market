import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product = {
    id: 1,
    name: 'Wireless Bluetooth Headphones',
    price: 89.99,
    originalPrice: 129.99,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop'
    ],
    description: 'High-quality wireless headphones with noise cancellation...',
    features: ['Noise Cancellation', '30hr Battery', 'Bluetooth 5.0'],
    specifications: {
      'Color': 'Black',
      'Battery': '30 hours',
      'Connectivity': 'Bluetooth 5.0'
    },
    reviews: [
      { user: 'John D.', rating: 5, comment: 'Great sound quality!' }
    ]
  };

  selectedImage: string = '';
  quantity: number = 1;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.selectedImage = this.product.images[0];
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) this.quantity--;
  }
}