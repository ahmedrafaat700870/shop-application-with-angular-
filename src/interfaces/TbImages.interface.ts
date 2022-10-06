import { IItem } from './Item.interface';

export interface TbItemImage {
  imageId: number;
  imageName?: string;
  itemId: number;
  item?: IItem;
}
