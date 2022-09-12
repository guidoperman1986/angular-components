import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';
import { InputComponent } from './input/input.component';
import { InputFormComponent } from './input-form/input-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DividerComponent, InputComponent, InputFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [DividerComponent, InputComponent, InputFormComponent],
})
export class SharedModule {}
