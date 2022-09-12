import { Component, Input, OnInit } from '@angular/core';
import { FormControl, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent implements OnInit {
  @Input() label!: string;
  @Input() control = new FormControl('');
  @Input() inputType!: string;

  constructor() {}

  ngOnInit(): void {}

  getErrors(control: AbstractControl): ValidationErrors | null {
    return control.errors;
  }

  get showErrors() {
    const { dirty, touched, errors } = this.control;

    return dirty && touched && errors;
  }
}
