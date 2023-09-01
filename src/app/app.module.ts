import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OurproductComponent } from './ourproduct/ourproduct.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { ProductOneComponent } from './ourproduct/product-one/product-one.component';
import { ProductTwoComponent } from './ourproduct/product-two/product-two.component';
import { ProductThreeComponent } from './ourproduct/product-three/product-three.component';
import { ProductFourComponent } from './ourproduct/product-four/product-four.component';
import { ProductFiveComponent } from './ourproduct/product-five/product-five.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermCondiComponent } from './term-condi/term-condi.component';
import { RetrunPolicyComponent } from './retrun-policy/retrun-policy.component';
import { FooterComponent } from './footer/footer.component';
import { OrderConformPopComponent } from './order-conform-pop/order-conform-pop.component';




@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    PageHeaderComponent,
    AboutusComponent,
    OurproductComponent,
    PageErrorComponent,
    ProductOneComponent,
    ProductTwoComponent,
    ProductThreeComponent,
    ProductFourComponent,
    ProductFiveComponent,
    PrivacyPolicyComponent,
    TermCondiComponent,
    RetrunPolicyComponent,
    FooterComponent,
    OrderConformPopComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  exports:[
    ProductOneComponent,
    ProductTwoComponent,
    ProductThreeComponent,
    ProductFourComponent,
    ProductFiveComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 




}
