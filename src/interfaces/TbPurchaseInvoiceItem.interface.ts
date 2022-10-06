import { IItem } from './Item.interface';

export interface TbPurchaseInvoiceItem {
  invoiceItemId: number;
  itemId: number;
  invoiceId: number;
  qty: number;
  invoicePrice: number;
  notes?: string;
  invoice?: TbPurchaseInvoiceItem;
  item?: IItem;
}
