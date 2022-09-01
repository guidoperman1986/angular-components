import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MathFormsRoutingModule } from './math-forms-routing.module';
import { EquationComponent } from './equation/equation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AnswerHighlightDirective } from './directives/answer-highlight.directive';

@NgModule({
  declarations: [EquationComponent, AnswerHighlightDirective],
  imports: [CommonModule, MathFormsRoutingModule, ReactiveFormsModule],
})
export class MathFormsModule {}
