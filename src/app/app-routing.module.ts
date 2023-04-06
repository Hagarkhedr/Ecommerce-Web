import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedLayoutComponent } from './layout/authorized-layout/authorized-layout.component';
import { HomeComponent } from './modules/home/home/home.component';
import { ProductListComponent } from './modules/shop/product-list/product-list.component';
import { AboutComponent } from './modules/about/about/about.component';
import { ProductDetailComponent } from './modules/shop/product-detail/product-detail.component';
import { CheckoutCartComponent } from './modules/shop/checkout-cart/checkout-cart.component';

const routes: Routes = [
  {
    path:'',
    component:AuthorizedLayoutComponent,
    children:[{
      path:'',
      component:HomeComponent
    },
    {
      path:'shop',
      component:ProductListComponent
    },
    {
      path:'about',
      component:AboutComponent
    },
    {
      path:'detail',
      component:ProductDetailComponent
    },
    {
      path:'checkout',
      component:CheckoutCartComponent
    },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
