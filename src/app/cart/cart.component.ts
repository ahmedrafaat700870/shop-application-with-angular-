import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICart } from 'src/interfaces/cart.interface';
import { ICartItem } from 'src/interfaces/CartItem.interface';
import { CartServices } from 'src/Services/APIs/Cart.Services';
import { ItemServices } from 'src/Services/APIs/Item.Services';
declare var $: any;
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(
    private readonly routes: ActivatedRoute,
    private readonly cartServices: CartServices
  ) {}
  Cart?: ICart;
  id?: string;
  item?: ICartItem;
  ngOnInit(): void {
    $(document).ready(function () {
      let body = document.body;
      let ScriptTheme = document.createElement('script');
      ScriptTheme.src = '../../assets/js/script.js';
      ScriptTheme.innerHTML = '';
      ScriptTheme.async = true;
      ScriptTheme.defer = true;
      body.appendChild(ScriptTheme);
    });
    this.routes.paramMap.subscribe((params) => {
      this.id = params.get('id') as unknown as string;
      // console.log(parseInt(this.id, 10), 'prams id');
      // this.cartServices.addItem(parseInt(this.id, 10), 1);
      this.Cart = this.cartServices.getCart() || ({} as ICart);
    });
    // console.log(this.Cart);
  }
  AddToCart(event: Event, id: number): void {
    // event.target.
    this.cartServices.addItem(id, 1);
    this.Cart = this.cartServices.getCart() || ({} as ICart);
  }
  DropFromCart(event: Event, id: number): void {
    this.cartServices.decreaseItem(id);
    this.Cart = this.cartServices.getCart() || ({} as ICart);
  }
  dropItem(id: number): void {
    this.cartServices.DropFromCart(id);
    this.Cart = this.cartServices.getCart() || ({} as ICart);
  }
}
