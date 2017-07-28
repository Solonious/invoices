import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InvoicesComponent }   from './components/invoices/invoices.component';
import { InvoiceFormComponent }      from './components/invoice-form/invoice-form.component';

const routes: Routes = [
    { path: '', redirectTo: '/invoices', pathMatch: 'full' },
    { path: 'invoices',  component: InvoicesComponent },
    { path: 'add-invoice',     component: InvoiceFormComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
