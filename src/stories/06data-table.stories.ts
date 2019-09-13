import { storiesOf } from '@storybook/angular';

import { AppModule } from '../app/app.module';

import { PaginatorComponent } from '../app/data-table/paginator/paginator.component';
import { SortHeaderComponent } from '../app/data-table/sort-header/sort-header.component';
import { TableComponent } from '../app/data-table/table/table.component';

storiesOf('Data Table', module).add('Paginator', () => ({
  component: PaginatorComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));

storiesOf('Data Table', module).add('Sort Header', () => ({
  component: SortHeaderComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));

storiesOf('Data Table', module).add('Table', () => ({
  component: TableComponent,
  moduleMetadata: {
    imports: [AppModule]
  }
}));
