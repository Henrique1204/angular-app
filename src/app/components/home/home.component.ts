import { Component, inject } from '@angular/core';

import { CountService } from '../../services/count.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public countService = inject(CountService)

  // ou
  // public count: number = 0;

  // sumClick() {
  //   this.count = ++this.count;
  // }

  // subClick() {
  //   this.count = this.count === 0 ? 0 : --this.count;
  // }
}
