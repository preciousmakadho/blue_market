export interface Product {
  id: number;
  sku: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badges: string[];
  category: string;
}

export interface BlogPost {
  id: number;
  title: string;
  image: string;
  category: string;
  date: string;
  author: string;
}

export interface Category {
  name: string;
  key: string;
  icon: string;
  subcategories: string[];
  productCount: number;
}