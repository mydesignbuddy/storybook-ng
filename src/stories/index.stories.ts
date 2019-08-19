import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome, Button } from '@storybook/angular/demo';

import {boolean, text} from '@storybook/addon-knobs/angular';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { ButtonComponent } from '../app/button/button.component';

storiesOf('Welcome', module).add('to Storybook', () => ({
  component: Welcome,
  props: {},
}));

storiesOf('Checkbox', module)
  .add('Basic', () => ({
    template: `
    <div>
      <mat-checkbox [disabled]="disabled" (change)="onChange($event)">
        {{label}}
      </mat-checkbox>
    </div>
    `,
    props: {
      disabled: boolean('disabled', false),
      label: text('label', 'Check me'),
      onChange: action('change')
    },
    moduleMetadata: {
      imports: [MatCheckboxModule]
    }
  }));

storiesOf('Button', module)
  .add('Basic', () => ({
    template: `
    <div>
      <button mat-button>Basic</button>
      <button mat-button color="primary">Primary</button>
      <button mat-button color="accent">Accent</button>
      <button mat-button color="warn">Warn</button>
      <button mat-button disabled>Disabled</button>
    </div>
    `,
    moduleMetadata: {
      imports: [MatButtonModule]
    }
  }))
  .add('Custom Button Component', () => ({
    template: `
      <div>
        <app-button [disabled]="disabled" (change)="onChange($event)" [text]="text"></app-button>
      </div>
    `,
    props: {
      disabled: boolean('disabled', false),
      text: text('text', 'FTDNA Button'),
      onChange: action('change')
    },
    moduleMetadata: {
      declarations: [ ButtonComponent ],
      imports: [MatButtonModule]
    }
  }),
  {
    notes: `
    # Code Example of a basic button
    \`\`\`
    <app-button [text]="text"></app-button>
    \`\`\`
  `,
  })
  .add(
    'with some emoji',
    () => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
      },
    }),
    { notes: 'My notes on a button with emojis' }
  )
  .add(
    'with some emoji and action',
    () => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
        onClick: action('This was clicked OMG'),
      },
    }),
    { notes: 'My notes on a button with emojis' }
  );

storiesOf('Another Button', module).add('button with link to another story', () => ({
  component: Button,
  props: {
    text: 'Go to Welcome Story',
    onClick: linkTo('Welcome'),
  },
}));
