import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CheckoutCartComponent } from './checkout-cart/checkout-cart.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    CheckoutCartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
