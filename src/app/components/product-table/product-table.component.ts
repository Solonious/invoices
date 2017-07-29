import {Component, Input } from '@angular/core';

@Component({
  selector: 'product-table',
  template: `
    <table class="table">
      <thead>
      <tr>
        <th>Product</th>
        <th>amount</th>
        <th>price</th>
        <th>total</th>
      </tr>
      </thead>
      <tbody *ngIf="productsList.length">
        <tr *ngFor="let item of productsList">
          <td>{{item.name}}</td>
          <td>{{item.amount}}</td>
          <td>{{item.price}}</td>
          <td>{{item.total}}</td>
        </tr>
      </tbody>
    </table>
    <div>
      <h5>Total :{{total}}</h5>
    </div>
  `
})
export class ProductTableComponent  {
  @Input() total: number;
  @Input() productsList: any;
  constructor() {}
}
