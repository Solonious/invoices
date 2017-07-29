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
    total: number,
  }[] = [];
  invoices: Invoices[];
  customers: Customers[] = [];
  selectedCustomer = null;
  products: Products[] = [];
  selectedProduct = null;
  discountValue = 0;
  amountValue = 1;
  total = 0;
  currentTotal: number;
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
    const product = this.products[this.selectedProduct - 1],
      customer = this.customers[this.selectedCustomer - 1];
      if (!this.discountValue) {
        this.currentTotal = (amount * (product.price * 100)) / 100;
      } else {
        const discount = ((product.price * 100 * this.discountValue) / 100).toFixed(2);
        this.currentTotal = amount * ((product.price * 100 - parseInt(discount)) / 100);
      }
    this.productsList.unshift({
      name: product.name,
      amount: +amount,
      price: product.price,
      total: this.currentTotal
    });
    this.calculateTotal(this.currentTotal);
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
  private calculateTotal(value: number): void {
    // this.productsList.forEach(item => {
    //   console.log(item.total);
    //   this.total += item.total * 100;
    // });
    this.total += Math.round(value * 100) / 100;
  }
}

