import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css'],
})
export class ErrorPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    $(document).ready(function () {
      const body = document.body;
      const script: HTMLScriptElement = document.createElement('script');
      script.src = '../../assets/js/script.js';
      script.innerHTML = '';
      script.async = true;
      script.defer = true;
      body.appendChild(script);
    });
  }
}
