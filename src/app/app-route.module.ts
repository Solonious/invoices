import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InvoicesComponent }   from './components/invoices/invoices.component';
import { InvoiceFormComponent }      from './components/invoice-form/invoice-form.component';
import { ProductsComponent } from './components/products/products.component';
import { CustomersComponent } from './components/customers/customers.component';

const routes: Routes = [
    { path: '', redirectTo: '/invoices', pathMatch: 'full' },
    { path: 'invoices',  component: InvoicesComponent },
    { path: 'add-invoice',     component: InvoiceFormComponent },
    { path: 'products',     component: ProductsComponent },
    { path: 'customers',     component: CustomersComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
