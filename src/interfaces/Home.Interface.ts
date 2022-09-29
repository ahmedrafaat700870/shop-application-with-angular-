import { IBlog } from './Blo.Interface';
import { IInstagram } from './Instagram.interface';
import { IItem } from './Itme.interface';
export interface IHome {
  productSlider: Array<IItem>;
  TopProduct: Array<IItem>;
  Instagram: Array<IInstagram>;
  Blogs: Array<IBlog>;
}
