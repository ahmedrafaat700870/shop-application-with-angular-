import { ICartItem } from './CartItem.interface';

export interface ICart {
  items: Array<ICartItem>;
  TotalPrice?: number;
}
