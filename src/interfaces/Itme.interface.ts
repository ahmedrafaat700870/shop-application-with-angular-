import { Categories } from './Categories.interface';
export interface IItem {
  ItemId: number;
  ItemName: string;
  ItemMainPhoto: string;
  ItemSecondPhoto: string;
  ItemPrice: number;
  ItemRating: number;
  ItemColor: string[];
  Categories?: Categories;
}
