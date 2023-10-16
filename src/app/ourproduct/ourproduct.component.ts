import { Component } from '@angular/core';

@Component({
  selector: 'app-ourproduct',
  templateUrl: './ourproduct.component.html',
  styleUrls: ['./ourproduct.component.css']
})
export class OurproductComponent {


  public productdb:any = [
    { productmainimg:'https://picsum.photos/200/300.jpg', 
      productShortName:'Black Lemon', 
      productName:'Black Natural Dried Lemon, Cooking Essential for Mandi and Arabic DishesDried Black Lemon | Dried Citrus Fruit', 
      price:120, 
      product_dis:169, 
      weight:'100g',
      link:'/black_lemon',
      customerReview:1021, 
      discription:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa eos excepturi nam nostrum, eum veritatis dignissimos vitae? Voluptatibus, ullam totam corrupti dolor impedit laudantium a fugiat atque repudiandae. Laborum, ducimus?',
      AdditionalInfo:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa eos excepturi nam nostrum, eum veritatis dignissimos vitae? Voluptatibus, ullam totam corrupti dolor impedit laudantium a fugiat atque repudiandae. Laborum, ducimus?',
      careInstruction:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa eos excepturi nam nostrum, eum veritatis dignissimos vitae? Voluptatibus, ullam totam corrupti dolor impedit laudantium a fugiat atque repudiandae. Laborum, ducimus?',
      stock:12,
      review:[
        {
          img:'url1',
          name:'prasad kumar garg',
          Comment:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa eos excepturi nam nostrum,',
          comment_date:'12-08-2022',
        },
        {
          img:'url2',
          name:'prasad kumar garg2',
          Comment:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa eos excepturi nam nostrum,',
          comment_date:'12-08-2022',
        },
        {
          img:'url1',
          name:'prasad kumar garg3',
          Comment:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa eos excepturi nam nostrum,',
          comment_date:'12-08-2022',
        },
        {
          img:'url1',
          name:'prasad kumar garg4',
          Comment:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa eos excepturi nam nostrum,',
          comment_date:'12-08-2022',
        }
      ]
    },
    { productmainimg:'https://picsum.photos/200/300.jpg', 
      productShortName:'Oranges Dried', 
      productName:'Black Natural Dried Lemon, Cooking Essential for Mandi and Arabic DishesDried Black Lemon | Dried Citrus Fruit', 
      price:80, 
      product_dis:99, 
      weight:'80g',
      link:'/dry_orange',
      customerReview:1021, 
      discription:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa eos excepturi nam nostrum, eum veritatis dignissimos vitae? Voluptatibus, ullam totam corrupti dolor impedit laudantium a fugiat atque repudiandae. Laborum, ducimus?',
      AdditionalInfo:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa eos excepturi nam nostrum, eum veritatis dignissimos vitae? Voluptatibus, ullam totam corrupti dolor impedit laudantium a fugiat atque repudiandae. Laborum, ducimus?',
      careInstruction:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa eos excepturi nam nostrum, eum veritatis dignissimos vitae? Voluptatibus, ullam totam corrupti dolor impedit laudantium a fugiat atque repudiandae. Laborum, ducimus?',
      review:[
        {
          img:'url1',
          name:'prasad kumar garg',
          Comment:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa eos excepturi nam nostrum,',
          comment_date:'12-08-2022',
        },
        {
          img:'url2',
          name:'prasad kumar garg2',
          Comment:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa eos excepturi nam nostrum,',
          comment_date:'12-08-2022',
        },
        {
          img:'url1',
          name:'prasad kumar garg3',
          Comment:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa eos excepturi nam nostrum,',
          comment_date:'12-08-2022',
        },
        {
          img:'url1',
          name:'prasad kumar garg4',
          Comment:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa eos excepturi nam nostrum,',
          comment_date:'12-08-2022',
        }
      ]
    },
    { productmainimg:'https://picsum.photos/200/300.jpg', 
      productShortName:'Sweet Lime', 
      productName:'Black Natural Dried Lemon, Cooking Essential for Mandi and Arabic DishesDried Black Lemon | Dried Citrus Fruit', 
      price:60, 
      product_dis:84, 
      weight:'25g',
      link:'/sweet_lime',
      customerReview:1021, 
      discription:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa eos excepturi nam nostrum, eum veritatis dignissimos vitae? Voluptatibus, ullam totam corrupti dolor impedit laudantium a fugiat atque repudiandae. Laborum, ducimus?',
      AdditionalInfo:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa eos excepturi nam nostrum, eum veritatis dignissimos vitae? Voluptatibus, ullam totam corrupti dolor impedit laudantium a fugiat atque repudiandae. Laborum, ducimus?',
      careInstruction:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa eos excepturi nam nostrum, eum veritatis dignissimos vitae? Voluptatibus, ullam totam corrupti dolor impedit laudantium a fugiat atque repudiandae. Laborum, ducimus?',
      review:[
        {
          img:'url1',
          name:'prasad kumar garg',
          Comment:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa eos excepturi nam nostrum,',
          comment_date:'12-08-2022',
        },
        {
          img:'url2',
          name:'prasad kumar garg2',
          Comment:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa eos excepturi nam nostrum,',
          comment_date:'12-08-2022',
        },
        {
          img:'url1',
          name:'prasad kumar garg3',
          Comment:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa eos excepturi nam nostrum,',
          comment_date:'12-08-2022',
        },
        {
          img:'url1',
          name:'prasad kumar garg4',
          Comment:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa eos excepturi nam nostrum,',
          comment_date:'12-08-2022',
        }
      ]
    },
  ]
  
  public productflex:any = [
    {
      productmainimg:'https://picsum.photos/200/300.jpg', 
      shortheading:'Red chilly flakes', 
      productheading:'Red chilly flakes', 
      productprice:17,
      productdiscount:30,
      link:'/sweet_lime',

    },
    {
      productmainimg:'https://picsum.photos/200/300.jpg', 
      shortheading:'Oregano flakes', 
      productheading:'Red chilly flakes', 
      productprice:20,
      productdiscount:35,
      link:'/sweet_lime',
    }
  ]

  public bulkproduct:any = [
    {
      productimage:'https://picsum.photos/200/300.jpg',
      producthead:'Sweet Lime & Dried Orange ',
      productheading:'Instock',
      productprice:140,
      productdiscount:210,
      link:'/sweet_lime',
    },
    {
      productimage:'https://picsum.photos/200/300.jpg',
      producthead:'Black Lemon & Sweet Lime ',
      productheading:'Instock',
      productprice:140,
      productdiscount:210,
      link:'/sweet_lime',
    }
  ]

}

