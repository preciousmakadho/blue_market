import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop-sidebar.component.html',
  styleUrls: ['./shop-sidebar.component.css']
})
export class ShopSidebarComponent {
  // Similar to category component but with sidebar on right
}