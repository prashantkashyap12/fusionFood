import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UseEnquiryComponent } from './use-enquiry/use-enquiry.component';
import { UserLogComponent } from './user-log/user-log.component';



@NgModule({
  declarations: [
    UseEnquiryComponent,
    UserLogComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UseEnquiryComponent,
    UserLogComponent
  ]
})
export class UserLogModule { }
