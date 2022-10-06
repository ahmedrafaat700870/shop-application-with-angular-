import { IItem } from './Item.interface';

export interface IitemType {
  itemTypeId: number;
  itemTypeName?: string;
  imageName?: string;
  currentState: number;
  createdDate: string;
  createdBy?: string;
  updatedDate?: string;
  updatedBy?: string;
  tbItems?: Array<IItem>;
}
