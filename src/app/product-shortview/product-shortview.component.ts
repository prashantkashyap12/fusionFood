import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-shortview',
  templateUrl: './product-shortview.component.html',
  styleUrls: ['./product-shortview.component.css']
})
export class ProductShortviewComponent {
  
  @Input() productview:any;
  @Input() productflex:any;
  @Input() productbulk:any;

}
