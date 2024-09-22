import { Component } from '@angular/core';

@Component({
  selector: 'app-dried-water-melon',
  templateUrl: './dried-water-melon.component.html',
  styleUrls: ['./dried-water-melon.component.css']
})
export class DriedWaterMelonComponent {
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

  productbook:string= "Dried Water Melon Slices";
  constructor(){
    this.productBook();
  }
  productBook(){
    localStorage.setItem("product", `${this.productbook}`);
  }

}
