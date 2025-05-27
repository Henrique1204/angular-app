import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountService {
  constructor() {}

  public count: number = 0;

  sumClick() {
    this.count = ++this.count;
  }

  subClick() {
    this.count = this.count === 0 ? 0 : --this.count;
  }
}
