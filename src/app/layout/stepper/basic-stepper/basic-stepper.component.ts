import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-basic-stepper',
  templateUrl: './basic-stepper.component.html',
  styleUrls: ['./basic-stepper.component.scss']
})
export class BasicStepperComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor() {

  }

  ngOnInit() {
    this.firstFormGroup = new FormBuilder().group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = new FormBuilder().group({
      secondCtrl: ['', Validators.required]
    });
  }
}
