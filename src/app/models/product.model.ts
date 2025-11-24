export interface Product {
  id: number;
  sku: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  category: string;
  isFeatured: boolean;
  isOnSale: boolean;
  discount?: number; // Add this line
}