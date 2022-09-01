import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() control!: any;
  @Input() label!: string;

  constructor() {}

  ngOnInit(): void {}

  hasErrors() {
    return this.control?.dirty && this.control?.touched && this.control?.errors;
  }
}
