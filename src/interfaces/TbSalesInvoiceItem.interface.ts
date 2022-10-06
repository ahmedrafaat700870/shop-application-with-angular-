import { IItem } from './Item.interface';
import { TbSalesInvoice } from './TbSalesInvoice.interface';

export interface TbSalesInvoiceItem {
  invoiceItemId: number;
  itemId: number;
  invoiceId: number;
  qty: number;
  invoicePrice: number;
  notes?: string;
  invoice?: Array<TbSalesInvoice>;
  item?: IItem;
}
