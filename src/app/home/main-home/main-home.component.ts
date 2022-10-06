import { Component, Input, OnInit } from '@angular/core';
import { IItem } from 'src/interfaces/Item.interface';
import { ItemServices } from 'src/Services/APIs/Item.Services';
declare var $: any;
@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css'],
})
export class MainHomeComponent implements OnInit {
  constructor(private itemServices: ItemServices) {}
  categories: Array<IItem> = [];
  ngOnInit(): void {
    $(document).ready(function () {
      let body = document.body;
      let Script = document.createElement('script');
      Script.src = '../../../assets/js/script.js';
      Script.innerHTML = '';
      Script.async = true;
      Script.defer = true;
      body.appendChild(Script);
    });
    this.itemServices.GetAllItem().subscribe((data) => {
      this.categories = data;
    });
  }
}
