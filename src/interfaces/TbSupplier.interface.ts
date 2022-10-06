import { TbPurchaseInvoice } from './TbPurchaseInvoice.interface';

export interface TbSupplier {
  supplierId: number;
  supplierName?: string;
  tbPurchaseInvoices?: Array<TbPurchaseInvoice>;
}
