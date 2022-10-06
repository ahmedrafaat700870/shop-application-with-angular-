import { Component, OnInit, Input } from '@angular/core';
import { IItem } from 'src/interfaces/Item.interface';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tab-product',
  templateUrl: './tab-product.component.html',
  styleUrls: ['./tab-product.component.css'],
})
export class TabProductComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  @Input() item: IItem = {} as IItem;
  ngOnInit(): void {
    let id: number;
    console.log(this.item);
    this.route.paramMap.subscribe((prams) => {
      id = parseInt(prams.get('id') as unknown as string, 10);
    });
  }
}
