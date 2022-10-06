import { IItem } from './Item.interface';
import { TbBusinessInfo } from './TbBusinessInfo.interface';

export interface TbCustomer {
  customerId: number;
  customerName?: string;
  tbBusinessInfo?: TbBusinessInfo;
  items?: Array<IItem>;
}
