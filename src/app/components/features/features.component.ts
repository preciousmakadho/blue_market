import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  features = [
    {
      icon: 'fas fa-shipping-fast',
      title: 'Free Shipping',
      description: 'For orders from $50'
    },
    {
      icon: 'fas fa-headset',
      title: 'Support 24/7',
      description: 'Call us anytime'
    },
    {
      icon: 'fas fa-shield-alt',
      title: '100% Safety',
      description: 'Only secure payments'
    },
    {
      icon: 'fas fa-tags',
      title: 'Hot Offers',
      description: 'Discounts up to 90%'
    }
  ];
}