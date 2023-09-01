import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OurproductComponent } from './ourproduct/ourproduct.component';
import { ContactComponent } from './contact/contact.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { HomeComponent } from './home/home.component';
import { ProductOneComponent } from './ourproduct/product-one/product-one.component';
import { ProductTwoComponent } from './ourproduct/product-two/product-two.component';
import { ProductThreeComponent } from './ourproduct/product-three/product-three.component';
import { ProductFourComponent } from './ourproduct/product-four/product-four.component';
import { ProductFiveComponent } from './ourproduct/product-five/product-five.component';
import { TermCondiComponent } from './term-condi/term-condi.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RetrunPolicyComponent } from './retrun-policy/retrun-policy.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'about_us',component:AboutusComponent},
  {path:'', children:
    [
      {path:'our_product',component:OurproductComponent},
      {path:'dry_orange',component:ProductOneComponent},
      {path:'black_lemon',component:ProductTwoComponent},
      {path:'sweet_lime',component:ProductThreeComponent},
      {path:'combo_special1',component:ProductFourComponent},
      {path:'combo_special2',component:ProductFiveComponent}
    ]
  },
  {path:'TermCondition',component:TermCondiComponent},
  {path:'PrivacyPolicy',component:PrivacyPolicyComponent},
  {path:'RetrunPolicy',component:RetrunPolicyComponent},

  {path:'contact', component:ContactComponent},
  {path:'**', component:PageErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
