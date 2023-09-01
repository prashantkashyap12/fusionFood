import { Component } from '@angular/core';

@Component({
  selector: 'app-product-five',
  templateUrl: './product-five.component.html',
  styleUrls: ['./product-five.component.css']
})
export class ProductFiveComponent {
  prod_count:any = 1;
  remove(){
    this.prod_count--;
    if(this.prod_count <= 0){
      alert("Add 'at least' 1 Product")
    }
  }
  add(){
    this.prod_count++;
  }
}
