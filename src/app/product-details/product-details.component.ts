import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IItem } from 'src/interfaces/Item.interface';
import { RelatedItems } from 'src/Services/APIs/RelatedItems.interface';

declare var $: any;
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private routes: ActivatedRoute,
    private relatedItems: RelatedItems
  ) {}
  private id?: string;
  RelatedItems: Array<IItem> = [];
  ngOnInit(): void {
    $(document).ready(function () {
      const body = document.body;
      let ScriptTheme = document.createElement('script');
      let ScriptZoom = document.createElement('script');
      ScriptZoom.src = '../../assets/js/jquery.elevatezoom.js';
      ScriptTheme.src = '../../assets/js/script.js';
      ScriptTheme.innerHTML = '';
      ScriptZoom.innerHTML = '';
      ScriptTheme.async = true;
      ScriptZoom.async = true;
      ScriptZoom.defer = true;
      ScriptTheme.defer = true;
      body.appendChild(ScriptZoom);
      body.appendChild(ScriptTheme);
    });
    this.routes.paramMap.subscribe(
      (prams) => (this.id = prams?.get('id') as string)
    );
    this.relatedItems.GetRelatedItems(this.id || '').subscribe((data) => {
      this.RelatedItems = data;
      console.log(data);
    });
  }
}
