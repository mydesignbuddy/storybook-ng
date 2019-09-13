import { storiesOf } from '@storybook/angular';

import { AppModule } from '../app/app.module';

import { BadgeComponent } from '../app/buttons-indicators/badge/badge.component';
import { ButtonComponent } from '../app/buttons-indicators/button/button.component';
import { BottonToggleComponent } from '../app/buttons-indicators/botton-toggle/botton-toggle.component';
import { ChipsComponent } from '../app/buttons-indicators/chips/chips.component';
import { IconComponent } from '../app/buttons-indicators/icon/icon.component';
import { ProgressBarComponent } from '../app/buttons-indicators/progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from '../app/buttons-indicators/progress-spinner/progress-spinner.component';
import { RipplesComponent } from '../app/buttons-indicators/ripples/ripples.component';

storiesOf('Buttons & Indicators', module).add('Badge', () => ({
  component: BadgeComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));

storiesOf('Buttons & Indicators', module).add('Botton', () => ({
  component: ButtonComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));

storiesOf('Buttons & Indicators', module).add('Botton toggle', () => ({
  component: BottonToggleComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));

storiesOf('Buttons & Indicators', module).add('Chips', () => ({
  component: ChipsComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));

storiesOf('Buttons & Indicators', module).add('Icon', () => ({
  component: IconComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));

storiesOf('Buttons & Indicators', module).add('Progress spinner', () => ({
  component: ProgressSpinnerComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));

storiesOf('Buttons & Indicators', module).add('Progress bar', () => ({
  component: ProgressBarComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));

storiesOf('Buttons & Indicators', module).add('Ripples', () => ({
  component: RipplesComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));
