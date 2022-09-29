import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { IItem } from 'src/interfaces/Itme.interface';
declare var $: any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor() {}
  @Input() Item: IItem = {} as IItem;
  ngOnInit(): void {
    $(document).ready(function () {
      const ratingEl = document.getElementById('rating');
      const rating: number = Number.parseInt(
        ratingEl?.getAttribute('data-rating') as unknown as string
      );
      console.log(rating);
      let LiEl: HTMLLIElement;
      for (let i = 0; i < rating; i++) {
        LiEl = document.createElement('li');
        if (rating > i) LiEl.classList.add('read');
        else LiEl.classList.add('balck');
        ratingEl?.appendChild(LiEl);
      }
    });
  }
}
