import { Routes } from '@angular/router';
import { MarketplaceComponent } from './components/market-place/market-place.component';
import { ShopComponent } from './components/header/shop/shop.component';
import { AccountComponent } from './components/header/account/account.component';
import { CategoriesComponent } from './components/header/categories/categories.component';
import { BlogComponent } from './components/header/blog/blog.component';
import { DealsComponent } from './components/header/deals/deals.component';

// Shop Components
import { CategoryComponent } from './components/header/shop/category/category.component';
import { ShopGridComponent } from './components/header/shop/shop-grid/shop-grid.component';
import { ShopListComponent } from './components/header/shop/shop-list/shop-list.component';
import { ShopTableComponent } from './components/header/shop/shop-table/shop-table.component';
import { ShopSidebarComponent } from './components/header/shop/shop-sidebar/shop-sidebar.component';
import { ProductComponent } from './components/header/shop/product/product.component';
import { CartComponent } from './components/header/shop/cart/cart.component';
import { CheckoutComponent } from './components/header/shop/checkout/checkout.component';
import { OrderSuccessComponent } from './components/header/shop/order-success/order-success.component';
import { WishlistComponent } from './components/header/shop/wishlist/wishlist.component';
import { CompareComponent } from './components/header/shop/compare/compare.component';
import { TrackOrderComponent } from './components/header/shop/track-order/track-order.component';

// New Category Components
import { ElectronicsComponent } from './components/market-place/electronics/electronics.component';
import { FashionComponent } from './components/market-place/fashion/fashion.component';
import { GardenComponent } from './components/market-place/garden/garden.component';

export const routes: Routes = [
  { path: '', component: MarketplaceComponent },
  { path: 'home', component: MarketplaceComponent },
  
  // Shop routes
  { path: 'shop', component: CategoryComponent },
  { path: 'shop/category', component: CategoryComponent },
  { path: 'shop/category/:category', component: CategoryComponent },
  { path: 'shop/grid', component: ShopGridComponent },
  { path: 'shop/list', component: ShopListComponent },
  { path: 'shop/table', component: ShopTableComponent },
  { path: 'shop/sidebar', component: ShopSidebarComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'order-success', component: OrderSuccessComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'compare', component: CompareComponent },
  { path: 'track-order', component: TrackOrderComponent },
  
  // Category specific routes
  { path: 'electronics', component: ElectronicsComponent },
  { path: 'fashion', component: FashionComponent },
  { path: 'home-garden', component: GardenComponent },
  
  // Blog route
  { path: 'blog', component: BlogComponent }, 
  
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

  // Deal routes
  { path: 'deals', component: MarketplaceComponent },
  { path: 'deals/today', component: MarketplaceComponent },
  { path: 'deals/flash', component: MarketplaceComponent },
  { path: 'deals/seasonal', component: MarketplaceComponent },
  { path: 'deals/clearance', component: MarketplaceComponent },
  { path: 'deals/bundle', component: MarketplaceComponent },
  { path: 'deals/member', component: MarketplaceComponent },
  { path: 'deals/brand', component: MarketplaceComponent },
  { path: 'deals/discount', component: MarketplaceComponent },
  
  { path: '**', redirectTo: '' }
];