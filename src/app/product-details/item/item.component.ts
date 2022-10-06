import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IItem } from 'src/interfaces/Item.interface';
import { CartServices } from 'src/Services/APIs/Cart.Services';
import { ItemServices } from 'src/Services/APIs/Item.Services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  item: IItem = {} as IItem;

  constructor(
    private itemService: ItemServices,
    private routes: ActivatedRoute,
    private cartServices: CartServices,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.routes.paramMap.subscribe((prams) => {
      this.itemService
        .GetById(parseInt(prams.get('id') as unknown as string, 10))
        .subscribe((data) => {
          this.item = data;
        });
    });
  }
  AddToCart(): void {
    this.cartServices.addItem(parseInt(this.item.itemId.toString(), 10), 1);
    // this.router.navigateByUrl(`/ProductDetails/${this.item.itemId.toString()}`);
    this.router.navigate([`/Cart/${this.item.itemId.toString()}`]);
  }
}
