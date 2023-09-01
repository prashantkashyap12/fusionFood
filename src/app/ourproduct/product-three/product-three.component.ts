import { Component } from '@angular/core';

@Component({
  selector: 'app-product-three',
  templateUrl: './product-three.component.html',
  styleUrls: ['./product-three.component.css']
})
export class ProductThreeComponent {
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
