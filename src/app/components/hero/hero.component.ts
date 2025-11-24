import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  selectedYear = '';
  selectedBrand = '';
  selectedModel = '';
  selectedEngine = '';

  years = ['2023', '2022', '2021', '2020', '2019'];
  brands = ['Toyota', 'Ford', 'Honda', 'Chevrolet', 'BMW'];
  models = ['Camry', 'Corolla', 'RAV4', 'Civic', 'Accord'];
  engines = ['2.0L 4-cylinder', '2.5L 4-cylinder', '3.5L V6', '1.5L Turbo'];

  searchParts() {
    // Implement search functionality
    console.log('Searching parts...', {
      year: this.selectedYear,
      brand: this.selectedBrand,
      model: this.selectedModel,
      engine: this.selectedEngine
    });
  }
}