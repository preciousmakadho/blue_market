import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarketplaceComponent } from './components/market-place/market-place.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MarketplaceComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auto-parts-store';
}