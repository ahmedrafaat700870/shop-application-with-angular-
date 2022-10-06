import { IItem } from './Item.interface';

export interface TbO {
  osId: number;
  osName?: string;
  imageName?: string;
  showInHomePage: boolean;
  currentState: number;
  createdDate: Date;
  createdBy?: string;
  updatedDate?: Date;
  updatedBy?: string;
  tbItems?: Array<IItem>;
}
