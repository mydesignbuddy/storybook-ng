import { storiesOf } from '@storybook/angular';

import { AppModule } from '../app/app.module';

import { MenuComponent } from '../app/navigation/menu/menu.component';
import { SidenavComponent } from '../app/navigation/sidenav/sidenav.component';
import { ToolbarComponent } from '../app/navigation/toolbar/toolbar.component';

storiesOf('Navigation', module).add('Menu', () => ({
  component: MenuComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));

storiesOf('Navigation', module).add('Sidenav', () => ({
  component: SidenavComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));

storiesOf('Navigation', module).add('Toolbar', () => ({
  component: ToolbarComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));
