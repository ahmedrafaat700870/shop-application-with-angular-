import { Component, Input, OnInit } from '@angular/core';
import { IItem } from 'src/interfaces/Itme.interface';
@Component({
  selector: 'app-home-product-slider',
  templateUrl: './home-product-slider.component.html',
  styleUrls: ['./home-product-slider.component.css'],
})
export class HomeProductSliderComponent implements OnInit {
  constructor() {}
  @Input() items: Array<IItem> | null = null;
  ngOnInit(): void {}
}
