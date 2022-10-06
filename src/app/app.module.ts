import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home/home.component';
import { LogoSliderComponent } from './Home/logo-slider/logo-slider.component';
import { LogoSectionComponent } from './Home/logo-section/logo-section.component';
import { TimerBannerComponent } from './Home/timer-banner/timer-banner.component';
import { CategoryComponent } from './Home/category/category.component';
import { TabSectionComponent } from './Home/tab-section/tab-section.component';
import { ProdcutSectionComponent } from './Home/prodcut-section/prodcut-section.component';
import { CollectionBannerComponent } from './Home/collection-banner/collection-banner.component';
import { ProductBoxComponent } from './Home/product-box/product-box.component';
import { BlogSectionComponent } from './Home/blog-section/blog-section.component';
import { SErviceLayoutComponent } from './Home/service-layout/service-layout.component';
import { InstagramSectionComponent } from './Home/instagram-section/instagram-section.component';
import { MainHomeComponent } from './Home/main-home/main-home.component';
import { MainHeaderComponent } from './Header/main-header/main-header.component';
import { MainFooterComponent } from './Footer/main-footer/main-footer.component';
import { FooterSectionComponent } from './Footer/footer-section/footer-section.component';
import { AddToCartBarComponent } from './Footer/add-to-cart-bar/add-to-cart-bar.component';
import { ModalPoputStartComponent } from './Footer/modal-poput-start/modal-poput-start.component';
import { QuickViewModalPopupStartComponent } from './Footer/quick-view-modal-popup-start/quick-view-modal-popup-start.component';
import { ThemSettingComponent } from './Footer/them-setting/them-setting.component';
import { AddToCartComponent } from './Footer/add-to-cart/add-to-cart.component';
import { TapToTapStartComponent } from './Footer/tap-to-tap-start/tap-to-tap-start.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProductComponent } from './ChildComponent/product/product.component';
import { CategoiresChildComponent } from './ChildComponent/categoires-child/categoires-child.component';
import { ItemServices } from 'src/Services/APIs/Item.Services';
import { HttpClientModule } from '@angular/common/http';
import { TabProductComponent } from './Home/tab-product/tab-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ItemComponent } from './product-details/item/item.component';
import { ItemDetailsComponent } from './product-details/item-details/item-details.component';
import { ItemRelationalComponent } from './product-details/item-relational/item-relational.component';
import { RelatedItems } from 'src/Services/APIs/RelatedItems.interface';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { CartServices } from 'src/Services/APIs/Cart.Services';
import { CheckOutComponent } from './check-out/check-out.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogoSliderComponent,
    LogoSectionComponent,
    TimerBannerComponent,
    CategoryComponent,
    TabSectionComponent,
    ProdcutSectionComponent,
    CollectionBannerComponent,
    ProductBoxComponent,
    BlogSectionComponent,
    SErviceLayoutComponent,
    InstagramSectionComponent,
    MainHomeComponent,
    MainHeaderComponent,
    MainFooterComponent,
    FooterSectionComponent,
    AddToCartBarComponent,
    ModalPoputStartComponent,
    QuickViewModalPopupStartComponent,
    ThemSettingComponent,
    AddToCartComponent,
    TapToTapStartComponent,
    ErrorPageComponent,
    ProductComponent,
    CategoiresChildComponent,
    TabProductComponent,
    ProductDetailsComponent,
    ItemComponent,
    ItemDetailsComponent,
    ItemRelationalComponent,
    CartComponent,
    CartItemComponent,
    CheckOutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ItemServices, RelatedItems, CartServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
