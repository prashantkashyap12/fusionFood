import { Component } from '@angular/core';

@Component({
  selector: 'app-dried-pine-apple',
  templateUrl: './dried-pine-apple.component.html',
  styleUrls: ['./dried-pine-apple.component.css']
})
export class DriedPineAppleComponent {
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

  productbook:string= "Dried Lemon Slices";
  constructor(){
    this.productBook();
  }
  productBook(){
    localStorage.setItem("product", `${this.productbook}`);
  }
}
