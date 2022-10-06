import { Component, OnInit } from '@angular/core';
import { IItem } from 'src/interfaces/Item.interface';
import { ItemServices } from 'src/Services/APIs/Item.Services';
@Component({
  selector: 'app-prodcut-section',
  templateUrl: './prodcut-section.component.html',
  styleUrls: ['./prodcut-section.component.css'],
})
export class ProdcutSectionComponent implements OnInit {
  constructor(private itemService: ItemServices) {}
  items: Array<IItem> = [];
  ngOnInit(): void {
    this.itemService.GetAllItem().subscribe((data) => {
      this.items = data;
    });
  }
}
