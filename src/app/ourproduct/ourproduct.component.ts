import { Component } from '@angular/core';

@Component({
  selector: 'app-ourproduct',
  templateUrl: './ourproduct.component.html',
  styleUrls: ['./ourproduct.component.css']
})
export class OurproductComponent {


  public productdb:any = [
    { productmainimg:'../../assets/images/p-pages_section/Dry_Orange/shortview.jpg', 
      productShortName:'Oranges Dried', 
      price:80, 
      product_dis:99, 
      link:'/dry_orange',
      uid:'',
    },
    { productmainimg:'../../assets/images/p-pages_section/Dry_Black/shortview.png', 
      productShortName:'Black Lemon', 
      price:120, 
      product_dis:169, 
      link:'/black_Lemon',
      uid:'',
    },
    { productmainimg:'../../assets/images/p-pages_section/Dry_Lime/shortview.jpg', 
      productShortName:'Sweet Lime', 
      price:60, 
      product_dis:84, 
      link:'/sweet_lime',
      uid:'',
    },
    { productmainimg:'../../assets/images/p-pages_section/Dried_Apple/shortview.png', 
      productShortName:'Dried Apple', 
      price:60, 
      product_dis:85, 
      link:'/Dried_apple',
      uid:'',
    },
    {
      productmainimg:'../../assets/images/p-pages_section/Dry_Papaya/1.jpg', 
      productShortName:'Dried Papaya Slices', 
      price:60, 
      product_dis:86, 
      link:'/Dried_Papaya_Slices',
      uid:'',
    },
    {
      productmainimg:'../../assets/images/p-pages_section/Dry_water_melon/1.jpg', 
      productShortName:'Dried Water melon', 
      price:80, 
      product_dis:87, 
      link:'/Dried_water_melon',
      uid:'',
    },
    {
      productmainimg:'../../assets/images/p-pages_section/Dry_lamon/shortPic.png', 
      productShortName:'Dried Lemon Sliies', 
      price:60, 
      product_dis:88, 
      link:'/Dried_Lemon_Slices',
      uid:'',
    },
    {
      productmainimg:'../../assets/images/p-pages_section/Dry_Dried_Pineapple/shortview.png', 
      productShortName:'Dried Pineapple', 
      price:60, 
      product_dis:89, 
      link:'/Dried_Pineapples',
      uid:'',
    }
  ]
  public productflex:any = [
    {
      productmainimg:'../../assets/images/p-pages_section/red_chilly/shortImg.jpeg', 
      shortheading:'Red chilly flakes', 
      productprice:0.50,
      productdiscount:1,
      link:'/chilli_flakes',
      uid:'',
    },
    {
      productmainimg:'../../assets/images/p-pages_section/orogino/shortImg.jpeg', 
      shortheading:'Oregano flakes', 
      productprice:0.50,
      productdiscount:1.25,
      link:'/oregano_flakes',
      uid:'',
    }
  ]
  public bulkproduct:any = [
    {
      productimage:'../../assets/images/commingsoon.png',
      producthead:'Sweet Lime & Orange ',
      productprice:140,
      productdiscount:210,
      link:'/comming_soon',
      uid:'',
    },
    {
      productimage:'../../assets/images/commingsoon.png',
      producthead:'Black Lemon & Sweet Lime ',
      productprice:140,
      productdiscount:210,
      link:'/comming_soon',
      uid:'',
    }

  ]

}

