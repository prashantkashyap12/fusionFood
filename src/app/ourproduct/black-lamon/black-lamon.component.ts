import { Component } from '@angular/core';

@Component({
  selector: 'app-black-lamon',
  templateUrl: './black-lamon.component.html',
  styleUrls: ['./black-lamon.component.css']
})
export class BlackLamonComponent {

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

  productbook:string="Dry Black Lamon ";
  constructor(){
    this.productBook();
  }
  productBook(){
    localStorage.setItem("product", `${this.productbook}`);
  }




  
}
