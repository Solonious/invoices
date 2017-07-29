import { Component, OnInit } from '@angular/core';

import { Customers } from '../../shared/customers';
import { Products } from '../../shared/products';
import { Invoices } from '../../shared/invoices';
import { InvoiceItem } from '../../shared/invoice-item';


import { InvoicesService } from '../../invoices.service';

@Component({
  selector: 'invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css'],
  providers: [InvoicesService]
})
export class InvoiceFormComponent implements OnInit {
  id = 0;
  customer_id: number;
  productsList: {
    name: string,
    amount: number,
    price: number,
    total: number
  }[] = [];
  invoices: Invoices[];
  customers: Customers[] = [];
  selectedCustomer = null;
  products: Products[] = [];
  selectedProduct = null;
  discountValue = 0;
  total = 0;
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
  addProduct(amount: number): void {
    const product = this.products[this.selectedProduct - 1];
    const customer = this.customers[this.selectedCustomer - 1];
    const discount = +(this.discountValue / 100).toFixed(2);
    this.productsList.unshift({
      name: product.name,
      amount: +amount,
      price: product.price,
      total: (amount * (product.price * 100) * discount) / 100
    });
    this.calculate();
    this.createInvoice({
      customer_id: customer.id,
      discount: this.discountValue,
      total: this.total
    });
  }
  createInvoice(invoice: Invoices): void {
    this.invoicesService.createInvoice(invoice)
      .then(res => console.log(res.customer_id));
  }
  // addInvoiceItem(amount: number): void {
  //   const product = this.products[this.selectedProduct - 1];
  //   this.invoices.unshift({
  //     invoice_id: this.id,
  //     product_id: product.id,
  //     quantity: +amount
  //   });
  //   this.calculate();
  // }
  private calculate(): void {
    this.productsList.forEach(item => this.total += item.total);
  }
}

