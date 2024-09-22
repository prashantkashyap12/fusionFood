import { Component } from '@angular/core';

@Component({
  selector: 'app-dried-papaya',
  templateUrl: './dried-papaya.component.html',
  styleUrls: ['./dried-papaya.component.css']
})
export class DriedPapayaComponent {
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
  productbook:string= "Dried Papaya Slices";
  constructor(){
    this.productBook();
  }
  productBook(){
    localStorage.setItem("product", `${this.productbook}`);
  }
}
