import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MainHomeComponent } from './Home/main-home/main-home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckOutComponent } from './check-out/check-out.component';
const routes: Routes = [
  { path: 'Home', component: MainHomeComponent },
  { path: 'ProductDetails/:id', component: ProductDetailsComponent },
  { path: 'Cart/:id', component: CartComponent },
  { path: 'CheckOut', component: CheckOutComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
