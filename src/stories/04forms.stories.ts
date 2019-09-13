import { storiesOf } from '@storybook/angular';

import { AppModule } from '../app/app.module';

import { AutocompleteComponent } from '../app/forms/autocomplete/autocomplete.component';
import { CheckboxComponent } from '../app/forms/checkbox/checkbox.component';
import { DatepickerComponent } from '../app/forms/datepicker/datepicker.component';
import { FormfieldComponent } from '../app/forms/formfield/formfield.component';
import { InputComponent } from '../app/forms/input/input.component';
import { RadioComponent } from '../app/forms/radio/radio.component';
import { SelectComponent } from '../app/forms/select/select.component';
import { SliderComponent } from '../app/forms/slider/slider.component';
import { SlidetoggleComponent } from '../app/forms/slidetoggle/slidetoggle.component';

storiesOf('Forms', module).add('Autocomplete', () => ({
  component: AutocompleteComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));

storiesOf('Forms', module).add('Checkbox', () => ({
  component: CheckboxComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));

storiesOf('Forms', module).add('Datepicker', () => ({
  component: DatepickerComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));

storiesOf('Forms', module).add('Formfield', () => ({
  component: FormfieldComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));

storiesOf('Forms', module).add('Input', () => ({
  component: InputComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));

storiesOf('Forms', module).add('Radio', () => ({
  component: RadioComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));

storiesOf('Forms', module).add('Select', () => ({
  component: SelectComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));

storiesOf('Forms', module).add('Slidetoggle', () => ({
  component: SlidetoggleComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));

storiesOf('Forms', module).add('Slider', () => ({
  component: SliderComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));
