import { storiesOf } from '@storybook/angular';

import { AppModule } from '../app/app.module';

import { TypographyComponent } from '../app/typography/typography.component';
import { MaterialtypographyComponent } from 'src/app/typography/materialtypography/materialtypography.component';
import { ColorsComponent } from 'src/app/typography/colors/colors.component';


storiesOf('Typography & Colors', module).add('Standard Typography', () => ({
  component: TypographyComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));

storiesOf('Typography & Colors', module).add('Material Typography', () => ({
  component: MaterialtypographyComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));

storiesOf('Typography & Colors', module).add('Theme Colors', () => ({
  component: ColorsComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));
