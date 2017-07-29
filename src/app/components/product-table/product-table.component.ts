import {Component, Input } from '@angular/core';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'product-table',
  template: `
    <table class="table">
      <thead>
      <tr>
        <th>Product</th>
        <th class="amount">amount</th>
        <th>price</th>
        <th>total</th>
      </tr>
      </thead>
      <tbody *ngIf="productsList.length">
        <tr *ngFor="let item of productsList">
          <td>{{item.name}}</td>
          <td class="amount">
            <input [(ngModel)]="item.amount" name="item.amount" type="number" id="amount" class="form-control"></td>
          <td>{{item.price}}</td>
          <td>{{item.total}}</td>
        </tr>
      </tbody>
    </table>
    <div>
      <h5>Total :{{total | number: '1.2-5'}}</h5>
    </div>
  `,
  styles: [`
    .amount {
      width: 67px;
    }
  `]
})
export class ProductTableComponent  {
  @Input() total: number;
  @Input() productsList: any;
  constructor() {}
}
