import { IItem } from './Item.interface';

export interface TbItemDiscount {
  itemDiscountId: number;
  itemId: number;
  discountPercent: number;
  endDate?: Date;
  item?: IItem;
}
