import { Component, OnInit } from '@angular/core';
import {Products} from '../../shared/products';
import {InvoicesService} from '../../invoices.service';

@Component({
  selector: 'products',
  template: `
    <h3>Products</h3>
    <table class="table">
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Price</th>
      </tr>
      </thead>
      <tbody *ngIf="products">
      <tr *ngFor="let item of products">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>
      </tr>
      </tbody>
    </table>
  `,
  providers: [InvoicesService]
})
export class ProductsComponent implements OnInit {
  products: Products[];
  constructor(private invoicesService: InvoicesService) {}
  ngOnInit() {
    this.getProducts();
  }
  getProducts(): void {
    this.invoicesService.getProducts()
      .then(res => this.products = res)
      .catch(this.invoicesService.handleError);
  }
}
