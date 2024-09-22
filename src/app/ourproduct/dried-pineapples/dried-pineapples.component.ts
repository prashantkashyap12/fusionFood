import { Component } from '@angular/core';

@Component({
  selector: 'app-dried-pineapples',
  templateUrl: './dried-pineapples.component.html',
  styleUrls: ['./dried-pineapples.component.css']
})
export class DriedPineapplesComponent {
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

  productbook:string= "Dried Pineapple Slices";
  constructor(){
    this.productBook();
  }
  productBook(){
    localStorage.setItem("product", `${this.productbook}`);
  }

}
