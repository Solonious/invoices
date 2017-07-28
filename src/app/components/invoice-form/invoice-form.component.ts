import { Component, OnInit } from '@angular/core';

import { Customers } from '../../shared/customers';
import { Products } from '../../shared/products';

import { InvoicesService } from '../../invoices.service';

@Component({
    selector: 'invoice-form',
    templateUrl: './invoice-form.component.html',
    styleUrls: ['./invoice-form.component.css'],
    providers: [InvoicesService]
})
export class InvoiceFormComponent implements OnInit {
    customers: Customers[];
    products: Products[];
    htmlTextProduct = `
		<td><select  class="form-control"></select></td>
		<td class="col-xs-1"><input type="text" class="form-control"></td>
		<td>0 %</td>
		<td>255 <a style="float: right" (click)="alert('ok')">delete</a></td>
    `;
    constructor(private invoicesService: InvoicesService) {}
    ngOnInit() {
        this.getCustomers();
        this.getProducts();
    }
    getCustomers(): void {
        this.invoicesService.getCustomers()
            .then(res => this.customers = res)
            .catch(this.invoicesService.handleError);
    }
    getProducts(): void {
        this.invoicesService.getProducts()
            .then(res => this.products = res)
            .catch(this.invoicesService.handleError);
    }
    addProduct(): void {
        const body = document.getElementsByTagName('tbody')[0];
        const tr = document.createElement('tr');
        tr.innerHTML = this.htmlTextProduct;
        body.appendChild(tr);
    }
}