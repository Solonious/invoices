import { Component, OnInit } from '@angular/core';

import { InvoicesService } from '../../invoices.service';

import { Invoices } from '../../shared/invoices';
import { Customers } from '../../shared/customers';

@Component({
    selector: 'invoice-form',
    templateUrl: './invoices.component.html',
    styleUrls: ['./invoices.component.css'],
    providers: [InvoicesService]
})
export class InvoicesComponent implements OnInit {
  title = 'Invoices';
    invoices: Invoices[] = [];
    customers: Customers[] = [];
    constructor(private invoicesService: InvoicesService) {}
    ngOnInit(): void {
      this.getCustomers();
        this.getInvoices();
    }
    getInvoices(): void {
        this.invoicesService.getInvoices()
            .then(data => this.invoices = data)
            .catch(this.invoicesService.handleError);
    }
    getCustomers(): void {
      this.invoicesService.getCustomers()
        .then(data => this.customers = data)
        .catch(this.invoicesService.handleError);
    }
    getCustomerName(id: number): string {
      if (!id) {
        return;
      }
      return this.customers[id].name;
    }
}
