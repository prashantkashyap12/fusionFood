import { Component } from '@angular/core';

@Component({
  selector: 'app-oregano',
  templateUrl: './oregano.component.html',
  styleUrls: ['./oregano.component.css']
})
export class OreganoComponent {

  prod_count:any = 10;
  remove(){
    this.prod_count--;
    if(this.prod_count <= 0){
      alert("Add 'at least' 1 Product")
    }
  }
  add(){
    this.prod_count++;
  }

  productbook:string= "Dried Oregano Flakes ";
  constructor(){
    this.productBook();
  }
  productBook(){
    localStorage.setItem("product", `${this.productbook}`);
  }

}
