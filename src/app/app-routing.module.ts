import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OurproductComponent } from './ourproduct/ourproduct.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductOneComponent } from './ourproduct/product-one/product-one.component';
import { TermCondiComponent } from './term-condi/term-condi.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RetrunPolicyComponent } from './retrun-policy/retrun-policy.component';
import { RedicrectionPageComponent } from './redicrection-page/redicrection-page.component';
import { BlackLamonComponent } from './ourproduct/black-lamon/black-lamon.component';
import { SweetLimeComponent } from './ourproduct/sweet-lime/sweet-lime.component';
import { ChilliFlakesComponent } from './ourproduct/chilli-flakes/chilli-flakes.component';
import { DriedPineapplesComponent } from './ourproduct/dried-pineapples/dried-pineapples.component';
import { DriedWaterMelonComponent } from './ourproduct/dried-water-melon/dried-water-melon.component';
import { DriedAppleComponent } from './ourproduct/dried-apple/dried-apple.component';
import { DriedPineAppleComponent } from './ourproduct/dried-pine-apple/dried-pine-apple.component';
import { DriedPapayaComponent } from './ourproduct/dried-papaya/dried-papaya.component';
import { OreganoComponent } from './ourproduct/oregano/oregano.component';


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'about_us',component:AboutusComponent},
  {path:'', children:
    [
      {path:'our_product',component:OurproductComponent},
      {path:'black_Lemon',component:BlackLamonComponent},
      {path:'sweet_lime',component:SweetLimeComponent},
      {path:'dry_orange',component:ProductOneComponent},
      {path:'Dried_apple',component:DriedAppleComponent},
      {path:'Dried_Papaya_Slices',component:DriedPapayaComponent},
      {path:'Dried_water_melon',component:DriedWaterMelonComponent},
      {path:'Dried_Lemon_Slices',component:DriedPineAppleComponent},
      {path:'Dried_Pineapples',component:DriedPineapplesComponent},
      
      {path:'oregano_flakes',component:OreganoComponent},
      {path:'chilli_flakes',component:ChilliFlakesComponent},
    ]
  },
  {path:'TermCondition',component:TermCondiComponent},
  {path:'PrivacyPolicy',component:PrivacyPolicyComponent},
  {path:'RetrunPolicy',component:RetrunPolicyComponent},

  {path:'contact', component:ContactComponent},
  {path:'**',component:RedicrectionPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
