import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [CreditCardComponent, InputComponent, CardComponent],
  imports: [CommonModule, FormsRoutingModule, ReactiveFormsModule],
})
export class FormsModule {}
