import { Component, OnInit, Input } from '@angular/core';
import { IItem } from 'src/interfaces/Item.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor() {}
  @Input() item: IItem = {} as IItem;
  ngOnInit(): void {}
}
