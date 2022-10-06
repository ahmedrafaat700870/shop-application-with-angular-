import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IItem } from 'src/interfaces/Item.interface';
import { ApiConfig } from '../ApiConfig';
@Injectable()
export class RelatedItems {
  constructor(private http: HttpClient) {}
  GetRelatedItems(id: string): Observable<Array<IItem>> {
    return this.http.get<Array<IItem>>(
      ApiConfig.ApiUrl +
        ApiConfig.ItemEndPoints.GetRealatedItems +
        '/' +
        parseInt(id as unknown as string, 10)
    );
  }
}
