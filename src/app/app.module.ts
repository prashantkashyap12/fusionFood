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
import { ProductOneComponent } from './ourproduct/product-one/product-one.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermCondiComponent } from './term-condi/term-condi.component';
import { RetrunPolicyComponent } from './retrun-policy/retrun-policy.component';
import { FooterComponent } from './footer/footer.component';
import { OrderConformPopComponent } from './order-conform-pop/order-conform-pop.component';
import { ProductShortviewComponent } from './product-shortview/product-shortview.component';
import { RedicrectionPageComponent } from './redicrection-page/redicrection-page.component';
import { BlackLamonComponent } from './ourproduct/black-lamon/black-lamon.component';
import { SweetLimeComponent } from './ourproduct/sweet-lime/sweet-lime.component';
import { RedChilliComponent } from './ourproduct/red-chilli/red-chilli.component';
import { OreganoComponent } from './ourproduct/oregano/oregano.component';
import { ChilliFlakesComponent } from './ourproduct/chilli-flakes/chilli-flakes.component';
import { DriedPineapplesComponent } from './ourproduct/dried-pineapples/dried-pineapples.component';
import { DriedWaterMelonComponent } from './ourproduct/dried-water-melon/dried-water-melon.component';
import { DriedAppleComponent } from './ourproduct/dried-apple/dried-apple.component';
import { DriedPineAppleComponent } from './ourproduct/dried-pine-apple/dried-pine-apple.component';
import { DriedPapayaComponent } from './ourproduct/dried-papaya/dried-papaya.component';
import { HashLocationStrategy, LocationStrategy, Location } from '@angular/common';
import { UserLogModule } from './auth/user-log.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    PageHeaderComponent,
    AboutusComponent,
    OurproductComponent,
    ProductOneComponent,
    PrivacyPolicyComponent,
    TermCondiComponent,
    RetrunPolicyComponent,
    FooterComponent,
    OrderConformPopComponent,
    ProductShortviewComponent,
    RedicrectionPageComponent,
    BlackLamonComponent,
    SweetLimeComponent,
    RedChilliComponent,
    OreganoComponent,
    ChilliFlakesComponent,
    DriedPineapplesComponent,
    DriedWaterMelonComponent,
    DriedAppleComponent,
    DriedPineAppleComponent,
    DriedPapayaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UserLogModule
  ],
  exports:[
    ProductOneComponent,

  ],
  providers: [
    Location, {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 




}
