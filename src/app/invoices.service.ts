import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Invoices } from './shared/invoices';
import { InvoiceItem } from './shared/invoice-item';
import { Customers } from './shared/customers';
import { Products } from './shared/products';

@Injectable()
export class InvoicesService {
    private host = 'http://localhost:8000';
    private customersUrl = `${this.host}/api/customers`;
    private productsUrl = `${this.host}/api/products`;
    private invoicesUrl = `${this.host}/api/invoices`;
    private headers = new Headers({'Content-Type': 'application-json'});
    constructor(private http: Http) {}
    getInvoices(): Promise<Invoices[]> {
        return this.http.get(this.invoicesUrl)
            .toPromise()
            .then(res => res.json() as Invoices[])
            .catch(this.handleError);
    }
    handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
    getInvoiceItem(id: number): Promise<InvoiceItem> {
        const url = `${this.invoicesUrl}/${id}/items`;
        return this.http.get(url).toPromise()
            .then(res => res.json() as InvoiceItem)
            .catch(this.handleError);
    }
    getCustomers(): Promise<Customers[]> {
        return this.http.get(this.customersUrl)
            .toPromise()
            .then(res => res.json() as Customers[])
            .catch(this.handleError);
    }
    getProducts(): Promise<Products[]> {
        return this.http.get(this.productsUrl)
            .toPromise()
            .then(res => res.json() as Products[])
            .catch(this.handleError);
    }
    getInvoice(id: number): Promise<Invoices> {
      const url = `${this.invoicesUrl}/${id}`;
      return this.http.get(url)
        .toPromise()
        .then(res => res.json() as Invoices)
        .catch(this.handleError);
    }
    createInvoice(invoice: Invoices): Promise<Invoices> {
      const url = this.invoicesUrl;
      return this.http.post(url, JSON.stringify(invoice), {headers: this.headers})
        .toPromise()
        .then(res => res.json() as Invoices)
        .catch(this.handleError);
    }
    // update(hero: Hero): Promise<Hero> {
    //     const url = `${this.heroesUrl}/${hero.id}`;
    //     return this.http
    //         .put(url, JSON.stringify(hero), {headers: this.headers})
    //         .toPromise()
    //         .then(() => hero)
    //         .catch(this.handleError);
    // }
    // create(name: string): Promise<Hero> {
    //     return this.http
    //         .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
    //         .toPromise()
    //         .then(res => res.json().data as Hero)
    //         .catch(this.handleError);
    // }
    // delete(id: number): Promise<void> {
    //     const url = `${this.heroesUrl}/${id}`;
    //     return this.http.delete(url, {headers: this.headers})
    //         .toPromise()
    //         .then(() => null)
    //         .catch(this.handleError);
    // }
}
