import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formfield',
  templateUrl: './formfield.component.html',
  styleUrls: ['./formfield.component.scss']
})
export class FormfieldComponent {
  options: FormGroup;
  options2: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  constructor() {
    this.options = new FormBuilder().group({
      hideRequired: false,
      floatLabel: 'auto',
    });
    this.options2 = new FormBuilder().group({
      color: 'primary',
      fontSize: [16, Validators.min(10)],
    });
  }
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  getFontSize() {
    return Math.max(10, this.options2.value.fontSize);
  }
}
