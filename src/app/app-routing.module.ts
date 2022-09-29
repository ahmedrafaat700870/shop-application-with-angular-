import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Item', component: ItemComponent },
  { path: 'ItemDetails/:id', component: ItemDetailsComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
