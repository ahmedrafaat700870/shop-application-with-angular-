import { Component, OnInit } from '@angular/core';
import { HomeServices } from 'src/Bl/Home.Services';
import { IHome } from '../../interfaces/Home.Interface';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private oHomeServices: HomeServices) {}
  DataHome: any;

  ngOnInit(): void {
    $(document).ready(function () {
      const body = <HTMLDivElement>document.body;
      const script = document.createElement('script');
      script.innerHTML = '';
      script.src = '../../assets/js/script.js';
      script.async = true;
      script.defer = true;
      body.appendChild(script);
    });
    this.DataHome = this.oHomeServices.GetAll();
  }
}
