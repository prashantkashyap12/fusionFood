import { Component } from '@angular/core';

@Component({
  selector: 'app-product-four',
  templateUrl: './product-four.component.html',
  styleUrls: ['./product-four.component.css']
})
export class ProductFourComponent {
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
