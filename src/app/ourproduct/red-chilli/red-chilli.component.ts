import { Component } from '@angular/core';

@Component({
  selector: 'app-red-chilli',
  templateUrl: './red-chilli.component.html',
  styleUrls: ['./red-chilli.component.css']
})
export class RedChilliComponent {
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

  productbook:string= "Red Chilli Flakes";
  constructor(){
    this.productBook();
  }
  productBook(){
    localStorage.setItem("product", `${this.productbook}`);
  }
}
