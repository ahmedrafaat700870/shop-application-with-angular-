import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ItemServices } from 'src/Bl/Item.Servies';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { HomeCollectionBannerComponent } from './home-collection-banner/home-collection-banner.component';
import { HomeParagraphComponent } from './home-paragraph/home-paragraph.component';
import { HomeProductSliderComponent } from './home-product-slider/home-product-slider.component';
import { HomeParallaxBannerComponent } from './home-parallax-banner/home-parallax-banner.component';
import { HomeTapTopComponent } from './home-tap-top/home-tap-top.component';
import { HomeServiceLayoutComponent } from './home-service-layout/home-service-layout.component';
import { HomeBlogSectionComponent } from './home-blog-section/home-blog-section.component';
import { HomeInstregarmSectionComponent } from './home-instregarm-section/home-instregarm-section.component';
import { HomeLogoSectionComponent } from './home-logo-section/home-logo-section.component';
import { ProductComponent } from './product/product.component';
import { BlogComponent } from './blog/blog.component';
import { InstagramComponent } from './instagram/instagram.component';
import { HomeServices } from 'src/Bl/Home.Services';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ItemComponent,
    ItemDetailsComponent,
    ErrorPageComponent,
    HomeSliderComponent,
    HomeCollectionBannerComponent,
    HomeParagraphComponent,
    HomeProductSliderComponent,
    HomeParallaxBannerComponent,
    HomeTapTopComponent,
    HomeServiceLayoutComponent,
    HomeBlogSectionComponent,
    HomeInstregarmSectionComponent,
    HomeLogoSectionComponent,
    ProductComponent,
    BlogComponent,
    InstagramComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ItemServices, HomeServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
