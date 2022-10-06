import { TbCustomer } from './TbCustomer.interface';

export interface TbBusinessInfo {
  businessInfoId: number;
  businessCardNumber?: string;
  officePhone?: string;
  budget: number;
  cutomerId: number;
  cutomer?: TbCustomer;
}
