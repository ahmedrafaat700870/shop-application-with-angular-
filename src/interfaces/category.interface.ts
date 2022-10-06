import { IItem } from './Item.interface';
export interface ICatagories {
  categoryId: number;
  categoryName?: string;
  createdBy?: string;
  createdDate: string;
  currentState: number;
  imageName?: string;
  showInHomePage?: boolean;
  updatedBy?: string;
  updatedDate?: string;
  tbItems?: IItem;
}
