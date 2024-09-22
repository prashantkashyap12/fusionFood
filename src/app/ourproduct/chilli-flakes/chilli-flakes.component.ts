import { Component } from '@angular/core';

@Component({
  selector: 'app-chilli-flakes',
  templateUrl: './chilli-flakes.component.html',
  styleUrls: ['./chilli-flakes.component.css']
})
export class ChilliFlakesComponent {

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

  productbook:string= "Red chilly flakes";
  constructor(){
    this.productBook();
  }
  productBook(){
    localStorage.setItem("product", `${this.productbook}`);
  }

}
