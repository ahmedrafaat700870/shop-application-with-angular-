import { Injectable } from '@angular/core';
import { IItem } from 'src/interfaces/Itme.interface';
Injectable();
export class ItemServices {
  GetAll(): Array<IItem> {
    return [
      { ItemId: 1, ItemName: 'item 1', ItemPhotoName: 'one' },
      { ItemId: 2, ItemName: 'item 2', ItemPhotoName: 'two' },
    ];
  }
}
