import { IItem } from 'src/interfaces/Item.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfig } from '../ApiConfig';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable()
export class ItemServices {
  constructor(private http: HttpClient) {}
  GetById(id: number): Observable<IItem> {
    console.log('id is ', id);
    return this.http.get<IItem>(
      ApiConfig.ApiUrl +
        ApiConfig.ItemEndPoints.ProductGetById +
        '/' +
        id.toString()
    );
  }
  GetAllItem(): Observable<Array<IItem>> {
    return this.http.get<Array<IItem>>(
      ApiConfig.ApiUrl + ApiConfig.ItemEndPoints.ProductGetAll
    );
  }
  GetTabProduct(): Observable<Array<IItem>> {
    return this.http.get<Array<IItem>>(
      ApiConfig.ApiUrl + ApiConfig.ItemEndPoints.ProductGetAll
    );
  }
}
