import { Component } from '@angular/core';

@Component({
    selector: 'invoice-form',
    templateUrl: './invoice-form.component.html',
    styleUrls: ['./invoice-form.component.css']
})
export class InvoiceFormComponent {
    productCount = 0;
    htmlTextProduct = `
		<td><select  class="form-control"></select></td>
		<td class="col-xs-1"><input type="text" class="form-control"></td>
		<td>0 %</td>
		<td>255</td>
    `;
    addProduct(): void {
        const body = document.getElementsByTagName('tbody')[0];
        const tr = document.createElement('tr');
        tr.innerHTML = this.htmlTextProduct;
        body.appendChild(tr);
    }
}