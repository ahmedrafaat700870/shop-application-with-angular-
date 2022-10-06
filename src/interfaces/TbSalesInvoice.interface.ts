import { TbSalesInvoiceItem } from './TbSalesInvoiceItem.interface';

export interface TbSalesInvoice {
  invoiceId: number;
  invoiceDate: string;
  delivryDate: string;
  delivryManId?: number;
  notes?: string;
  customerId: number;
  createdBy?: string;
  createdDate: Date;
  currentState: number;
  updatedBy?: string;
  updatedDate?: Date;
  tbSalesInvoiceItems?: Array<TbSalesInvoiceItem>;
}
