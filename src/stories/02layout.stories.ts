import { storiesOf } from '@storybook/angular';

import { AppModule } from '../app/app.module';

import { CardComponent } from '../app/layout/card/card.component';
import { DividerComponent } from '../app/layout/divider/divider.component';
import { ExpansionPanelComponent } from '../app/layout/expansion-panel/expansion-panel.component';
import { GridListComponent } from '../app/layout/grid-list/grid-list.component';
import { ListComponent } from '../app/layout/list/list.component';
import { StepperComponent } from '../app/layout/stepper/stepper.component';
import { TabsComponent } from '../app/layout/tabs/tabs.component';
import { TreeComponent } from '../app/layout/tree/tree.component';

storiesOf('Layout', module).add('Card', () => ({
  component: CardComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));

storiesOf('Layout', module).add('Divider', () => ({
  component: DividerComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));

storiesOf('Layout', module).add('Expansion Panel', () => ({
  component: ExpansionPanelComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));

storiesOf('Layout', module).add('Grid List', () => ({
  component: GridListComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));

storiesOf('Layout', module).add('List', () => ({
  component: ListComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));

storiesOf('Layout', module).add('Stepper', () => ({
  component: StepperComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));

storiesOf('Layout', module).add('Tabs', () => ({
  component: TabsComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));

storiesOf('Layout', module).add('Tree', () => ({
  component: TreeComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));
