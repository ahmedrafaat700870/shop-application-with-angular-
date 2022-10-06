import { TbPurchaseInvoiceItem } from './TbPurchaseInvoiceItem.interface';
import { TbSupplier } from './TbSupplier.interface';

export interface TbPurchaseInvoice {
  invoiceId: number;
  invoiceDate: number;
  supplierId: number;
  notes?: string;
  supplier?: TbSupplier; // type of TbSublimer
  tbPurchaseInvoiceItems?: Array<TbPurchaseInvoiceItem>;
}
