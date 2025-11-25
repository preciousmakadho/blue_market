import { Routes } from '@angular/router';
import { MarketplaceComponent } from './components/market-place/market-place.component';
import { ShopComponent } from './components/header/shop/shop.component';
import { AccountComponent } from './components/header/account/account.component';

// Import other components you'll create for the routes
// You'll need to create these components for each route

export const routes: Routes = [
  { path: '', component: MarketplaceComponent },
  { path: 'home', component: MarketplaceComponent },
  { path: 'shop', component: ShopComponent }, // Main shop page
  { path: 'shop/category', component: MarketplaceComponent },
  { path: 'shop/grid', component: MarketplaceComponent },
  { path: 'shop/list', component: MarketplaceComponent },
  { path: 'shop/table', component: MarketplaceComponent },
  { path: 'shop/sidebar', component: MarketplaceComponent },
  { path: 'product/:id', component: MarketplaceComponent },
  { path: 'cart', component: MarketplaceComponent },
  { path: 'checkout', component: MarketplaceComponent },
  { path: 'order-success', component: MarketplaceComponent },
  { path: 'wishlist', component: MarketplaceComponent },
  { path: 'compare', component: MarketplaceComponent },
  { path: 'track-order', component: MarketplaceComponent },
  
  // Account routes
  { path: 'account', component: AccountComponent },
  { path: 'account/login', component: MarketplaceComponent },
  { path: 'account/register', component: MarketplaceComponent },
  { path: 'account/dashboard', component: MarketplaceComponent },
  { path: 'account/garage', component: MarketplaceComponent },
  { path: 'account/profile', component: MarketplaceComponent },
  { path: 'account/orders', component: MarketplaceComponent },
  { path: 'account/order-details/:id', component: MarketplaceComponent },
  { path: 'account/address-book', component: MarketplaceComponent },
  { path: 'account/edit-address', component: MarketplaceComponent },
  { path: 'account/change-password', component: MarketplaceComponent },
  
  { path: '**', redirectTo: '' }
];