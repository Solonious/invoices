import { Component, OnInit } from '@angular/core';
import { Customers } from '../../shared/customers';
import { InvoicesService } from '../../invoices.service';

@Component({
  selector: 'customers',
  template: `
    <h3>{{title}}</h3>
    <table class="table">
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Addres</th>
        <th>Phone</th>
      </tr>
      </thead>
      <tbody *ngIf="customers">
      <tr *ngFor="let item of customers">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.address}}</td>
        <td>{{item.phone}}</td>
      </tr>
      </tbody>
    </table>
  `,
  providers: [InvoicesService]
})
export class CustomersComponent implements OnInit {
  title = 'Customers';
  customers: Customers[];
  constructor(private invoicesService: InvoicesService) {}
  ngOnInit() {
    this.getCustomers();
  }
  getCustomers(): void {
    this.invoicesService.getCustomers()
      .then(res => this.customers = res)
      .catch(this.invoicesService.handleError);
  }
}

