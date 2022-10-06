import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css'],
})
export class CheckOutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    $(document).ready(function () {
      const body = document.body;
      let Script: HTMLScriptElement = document.createElement('script');
      Script.src = '../../assets/js/script.js';
      Script.innerHTML = '';
      Script.async = true;
      Script.defer = true;
      body.appendChild(Script);
    });
  }
  Save(BilFrom: NgForm): void {
    console.log(BilFrom.value);
  }
}
