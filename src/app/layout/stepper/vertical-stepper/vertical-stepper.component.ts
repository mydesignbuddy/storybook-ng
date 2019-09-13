import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-vertical-stepper',
  templateUrl: './vertical-stepper.component.html',
  styleUrls: ['./vertical-stepper.component.scss']
})
export class VerticalStepperComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor() {}

  ngOnInit() {
    this.firstFormGroup = new FormBuilder().group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = new FormBuilder().group({
      secondCtrl: ['', Validators.required]
    });
  }
}
