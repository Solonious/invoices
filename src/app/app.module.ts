import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';

import { AppRoutingModule } from './app-route.module';

@NgModule({
  declarations: [
    AppComponent,
    InvoicesComponent,
    InvoiceFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
