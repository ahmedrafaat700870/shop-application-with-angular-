import { Component, OnInit, Input } from '@angular/core';
import { IItem } from 'src/interfaces/Item.interface';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor() {}
  @Input() categories: Array<IItem> = [];
  ngOnInit(): void {}
}
