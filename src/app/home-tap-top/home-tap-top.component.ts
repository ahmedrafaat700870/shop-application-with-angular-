import { Component, Input, OnInit } from '@angular/core';
import { IItem } from 'src/interfaces/Itme.interface';

@Component({
  selector: 'app-home-tap-top',
  templateUrl: './home-tap-top.component.html',
  styleUrls: ['./home-tap-top.component.css'],
})
export class HomeTapTopComponent implements OnInit {
  constructor() {}
  @Input() items: Array<IItem> = [];
  ngOnInit(): void {}
}
