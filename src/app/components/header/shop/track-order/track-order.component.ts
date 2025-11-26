import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-track-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.css']
})
export class TrackOrderComponent {
  order = {
    number: 'ORD-123456',
    status: 'shipped',
    timeline: [
      { status: 'ordered', date: 'Dec 1, 2024', completed: true },
      { status: 'processed', date: 'Dec 2, 2024', completed: true },
      { status: 'shipped', date: 'Dec 3, 2024', completed: true },
      { status: 'delivered', date: 'Dec 5, 2024', completed: false }
    ]
  };
}