import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export class PasswordValidator {
  static areEqual: ValidatorFn = (formGroup: AbstractControl): ValidationErrors | null => {
    const form = formGroup as FormGroup;
    const password = form.get('senha');
    const confirmPassword = form.get('confSenha');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { areEqual: true };
    }
    return null;
  };
}


















// import { FormControl, FormGroup, NgForm, FormGroupDirective } from '@angular/forms';

// export class PasswordValidator {
//   // Inspired on: http://plnkr.co/edit/Zcbg2T3tOxYmhxs7vaAm?p=preview
//   static areEqual(formGroup: FormGroup) {
//     let value;
//     let valid = true;
//     for (let key in formGroup.controls) {
//       if (formGroup.controls.hasOwnProperty(key)) {
//         let control: FormControl = <FormControl>formGroup.controls[key];

//         if (value === undefined) {
//           value = control.value
//         } else {
//           if (value !== control.value) {
//             valid = false;
//             break;
//           }
//         }
//       }
//     }

//     if (valid) {
//       return null;
//     }

//     return {
//       areEqual: true
//     };
//   }
// }
