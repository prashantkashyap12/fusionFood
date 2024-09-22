import { Component } from '@angular/core';

@Component({
  selector: 'app-dried-apple',
  templateUrl: './dried-apple.component.html',
  styleUrls: ['./dried-apple.component.css']
})
export class DriedAppleComponent {
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


  productbook:string= "Dried Apple Slices";
  constructor(){
    this.productBook();
  }
  productBook(){
    localStorage.setItem("product", `${this.productbook}`);
  }
}
