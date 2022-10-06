import { Component, OnInit } from '@angular/core';
import { IItem } from 'src/interfaces/Item.interface';
import { ItemServices } from 'src/Services/APIs/Item.Services';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}
  item: IItem | null = null;
  Categories: Array<IItem> = [];
  title = 'Shop';
  ngOnInit(): void {}
}
