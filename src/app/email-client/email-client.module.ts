import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { EmailClientRoutingModule } from './email-client-routing.module';

@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [
    CommonModule,
    EmailClientRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class EmailClientModule {}
