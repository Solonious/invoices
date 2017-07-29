import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ProductsComponent } from './components/products/products.component';

import { AppRoutingModule } from './app-route.module';
import { InvoicesService } from './invoices.service';

@NgModule({
  declarations: [
    AppComponent,
    InvoicesComponent,
    InvoiceFormComponent,
    ProductTableComponent,
    CustomersComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [InvoicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
