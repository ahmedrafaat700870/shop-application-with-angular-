import { Component, OnInit } from '@angular/core';
import { IItem } from 'src/interfaces/Item.interface';
import { ItemServices } from 'src/Services/APIs/Item.Services';

@Component({
  selector: 'app-tab-section',
  templateUrl: './tab-section.component.html',
  styleUrls: ['./tab-section.component.css'],
})
export class TabSectionComponent implements OnInit {
  constructor(private itemService: ItemServices) {}
  items: Array<IItem> = [];
  ngOnInit(): void {
    this.itemService.GetTabProduct().subscribe((data) => {
      this.items = data;
      console.log(data);
    });
  }
}
