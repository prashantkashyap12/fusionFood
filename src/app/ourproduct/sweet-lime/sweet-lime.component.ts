import { Component } from '@angular/core';

@Component({
  selector: 'app-sweet-lime',
  templateUrl: './sweet-lime.component.html',
  styleUrls: ['./sweet-lime.component.css']
})
export class SweetLimeComponent {

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

  productbook:string= "Dried Sweet Lime Slices";
  constructor(){
    this.productBook();
  }
  productBook(){
    localStorage.setItem("product", `${this.productbook}`);
  }

}
