import { Component, OnInit } from '@angular/core';

import { InvoicesService } from '../../invoices.service';

import { Invoices } from '../../shared/invoices';

@Component({
    selector: 'invoice-form',
    templateUrl: './invoices.component.html',
    styleUrls: ['./invoices.component.css'],
    providers: [InvoicesService]
})
export class InvoicesComponent implements OnInit {
  title = 'Invoices';
    invoices: Invoices[] = [];
    constructor(private invoicesService: InvoicesService) {}
    ngOnInit(): void {
        this.getInvoices();
    }
    getInvoices(): void {
        this.invoicesService.getInvoices()
            .then(data => this.invoices = data)
            .catch(this.invoicesService.handleError);
    }
}
