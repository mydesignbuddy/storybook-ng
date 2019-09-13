import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent {

  startDate = new Date(1990, 0, 1);


  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
}
