import { storiesOf } from '@storybook/angular';

import { AppModule } from '../app/app.module';

import { ButtonSheetComponent } from '../app/popups-modals/button-sheet/button-sheet.component';
import { DialogComponent } from '../app/popups-modals/dialog/dialog.component';
import { SnackbarComponent } from '../app/popups-modals/snackbar/snackbar.component';
import { TooltipComponent } from '../app/popups-modals/tooltip/tooltip.component';

storiesOf('Popups & Modals', module).add('Button sheet', () => ({
  component: ButtonSheetComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));

storiesOf('Popups & Modals', module).add('Dialog', () => ({
  component: DialogComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));

storiesOf('Popups & Modals', module).add('Snackbar', () => ({
  component: SnackbarComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));

storiesOf('Popups & Modals', module).add('Tooltip', () => ({
  component: TooltipComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));
