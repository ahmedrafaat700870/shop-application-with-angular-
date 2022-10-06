import { Component, Input, OnInit } from '@angular/core';
import { IItem } from 'src/interfaces/Item.interface';

@Component({
  selector: 'app-categoires-child',
  templateUrl: './categoires-child.component.html',
  styleUrls: ['./categoires-child.component.css'],
})
export class CategoiresChildComponent implements OnInit {
  constructor() {}
  @Input() categorie: IItem = {} as IItem;
  ngOnInit(): void {
    console.log(this.categorie);
  }
}
