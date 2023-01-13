import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
    uniqueId:string="TEST|18 NOV 2020|AP NAFEED MOONG|R20|MUM 01";
    location:string="Hydrabad AB-Warehouse";
    startTime:string="00.02.00";
    productName:string="NAFEED MOONG1";
    perQTL:string="Rs. 500.00";
    actualQTL:string="100"
    bidPrice:string="Rs.704.00 ";
    description:string="TOBACCO2|200|RICE|R19|MP";
    extension:string="0";


    ishidden:boolean=true;

    hide(){
      this.ishidden=!this.ishidden;
    }
}
