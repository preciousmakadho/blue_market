import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { DealZoneComponent } from './components/deal-zone/deal-zone.component';
import { CategorySectionComponent } from './components/category-section/category-section.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    FeaturedProductsComponent,
    DealZoneComponent,
    CategorySectionComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'REDPARTS - Auto Parts Marketplace';
}