import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface Category {
  name: string;
  key: string;
  icon: string;
  subcategories: string[];
  productCount: number;
}

@Component({
  selector: 'app-category-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category-sidebar.component.html',
  styleUrls: ['./category-sidebar.component.css']
})
export class CategorySidebarComponent {
  @Input() categories: Category[] = [];
  @Input() expandedCategory: string | null = null;
  @Input() hoveredCategory: string | null = null;
  @Input() isCardHovered: boolean = false;
  
  @Output() categoryHover = new EventEmitter<string>();
  @Output() categoryLeave = new EventEmitter<void>();
  @Output() cardHover = new EventEmitter<void>();
  @Output() cardLeave = new EventEmitter<void>();
  @Output() toggleCategory = new EventEmitter<string>();
  @Output() navigateToCategory = new EventEmitter<string>();
  @Output() navigateToSubcategory = new EventEmitter<{categoryKey: string, subcategory: string}>();

  onCategoryHover(categoryKey: string): void {
    this.categoryHover.emit(categoryKey);
  }

  onCategoryLeave(): void {
    this.categoryLeave.emit();
  }

  onCardHover(): void {
    this.cardHover.emit();
  }

  onCardLeave(): void {
    this.cardLeave.emit();
  }

  onToggleCategory(categoryName: string): void {
    this.toggleCategory.emit(categoryName);
  }

  onNavigateToCategory(categoryKey: string): void {
    this.navigateToCategory.emit(categoryKey);
  }

  onNavigateToSubcategory(categoryKey: string, subcategory: string): void {
    this.navigateToSubcategory.emit({ categoryKey, subcategory });
  }
}