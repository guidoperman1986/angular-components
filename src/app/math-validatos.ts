import { AbstractControl } from '@angular/forms';

export class MathValidatos {
  static addition(target: string, sourceOne: string, sourceTwo: string) {
    return (form: AbstractControl) => {
      const sum = form.value[target];
      const firstNumber = form.value[sourceOne];
      const secondNumber = form.value[sourceTwo];

      if (firstNumber + secondNumber === parseInt(sum)) {
        return null;
      } else {
        return { addition: true };
      }
    };
  }

  /* static substraction() {

    } */
}
