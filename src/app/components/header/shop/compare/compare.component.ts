import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compare',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent {

  getFeatures(): string[] {
  const allFeatures = this.comparedProducts.flatMap(product => product.features);
  return [...new Set(allFeatures)];
}

  comparedProducts = [
    {
      name: 'Product A',
      price: 99.99,
      rating: 4.5,
      features: ['Feature 1', 'Feature 2', 'Feature 3']
    },
    {
      name: 'Product B',
      price: 129.99,
      rating: 4.8,
      features: ['Feature 1', 'Feature 3', 'Feature 4']
    }
  ];
}