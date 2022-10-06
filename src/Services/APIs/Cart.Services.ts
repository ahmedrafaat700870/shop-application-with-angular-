import { Injectable } from '@angular/core';
import { ICart } from 'src/interfaces/cart.interface';
import { ICartItem } from 'src/interfaces/CartItem.interface';
import { ItemServices } from './Item.Services';
@Injectable()
export class CartServices {
  LocalStorage: Storage;
  Cart: ICart = { items: [], TotalPrice: 0 } as ICart;
  constructor(private readonly oItemService: ItemServices) {
    this.LocalStorage = window.localStorage as Storage;
    this.Cart = (JSON.parse(
      this.LocalStorage.getItem('cart') as string
    ) as ICart) || { items: [], TotalPrice: 0 };
    console.log('cart data', this.Cart);
  }
  getItems() {
    return this.Cart.items;
  }
  getCart() {
    return this.Cart;
  }
  addItem(id: number, count: number) {
    this.oItemService.GetById(id).subscribe((data) => {
      if (data != null) {
        let Item: ICartItem = {
          itemId: id,
          itemName: data.itemName,
          itemPrice: data.salesPrice,
          itemCount: count,
          itemImageName: data.imageName,
          itemTotalPrice: count * data.salesPrice,
        };

        // check if item excite in cart
        console.log(Item, 'add item');
        if (this.check(id)) {
          console.log('data is exits');
          // this item excites in cart
          this.AdditionCounter(Item.itemId);
        } else {
          // this item not excites in cart
          console.log('data not exits');
          this.AddToCart(Item);
        }
      } else {
        // throw Error this data not founded by this id
      }
    });
  }
  check(itemId: number): boolean {
    console.log('check methods');
    let check: boolean = false;
    if (this.Cart.items.length > 0) {
      this.Cart.items.forEach((item) => {
        if (itemId === item.itemId) check = true;
      });
    }
    return check;
  }
  AdditionCounter(itemId: number): void {
    this.Cart.items.map((item) => {
      if (item.itemId == itemId) {
        (item.itemCount as unknown as number) += 1;
        item.itemTotalPrice = item.itemPrice * (item.itemCount as number);
        this.CalcTotalPriceInCart();
        this.LocalStorage?.setItem('cart', JSON.stringify(this.Cart));
      }
    });
  }

  CalcTotalPriceInCart(): void {
    let TotalPrice: number = 0;
    this.Cart.items.forEach((item) => {
      TotalPrice += item.itemPrice * (item.itemCount as number);
    });
    this.Cart.TotalPrice = TotalPrice;
  }
  AddToCart(item: ICartItem) {
    this.Cart.items.push(item);
    console.log(this.Cart, 'cart from AddToCart');
    this.CalcTotalPriceInCart();
    this.LocalStorage.setItem('cart', JSON.stringify(this.Cart));
  }
  decreaseItem(itemId: number): void {
    this.Cart.items.forEach((item) => {
      if (itemId === item.itemId) {
        if ((item.itemCount as number) > 1) {
          (item.itemCount as number) -= 1;
          item.itemTotalPrice = item.itemPrice * (item.itemCount as number);
          this.CalcTotalPriceInCart();
          this.LocalStorage?.setItem('cart', JSON.stringify(this.Cart));
        } else {
          // alert('drop');
          this.DropFromCart(itemId);
        }
      }
    });
  }
  DropFromCart(itemId: number): void {
    alert('drop');
    this.Cart.items = this.Cart.items.filter((item) => {
      if (item.itemId != itemId) {
        item.itemTotalPrice = item.itemPrice * (item.itemCount as number);
      }
      return item.itemId != itemId;
    });
    this.CalcTotalPriceInCart();
    this.LocalStorage?.setItem('cart', JSON.stringify(this.Cart));
  }
  UpdateItem(Item: ICartItem): void {
    this.Cart.items.forEach((item) => {
      if (Item.itemId === item.itemId) {
        item = Item;
        item.itemTotalPrice = item.itemPrice * (item.itemCount as number);
        this.CalcTotalPriceInCart();
        this.LocalStorage?.setItem('cart', JSON.stringify(this.Cart));
      }
    });
  }
}
