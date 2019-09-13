import { storiesOf } from '@storybook/angular';

import { AppModule } from '../app/app.module';

import { WelcomeComponent } from '../app/welcome/welcome.component';

storiesOf('Welcome', module).add('Home', () => ({
  component: WelcomeComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));
