import { Component } from '@angular/core';
import { linkTo } from '@storybook/addon-links';

@Component({
  selector: 'app-demo',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  items: Item[];

  linkTo = linkTo;

  constructor() {
    this.items = [
      {
        title: 'Typography & Colors',
        description: 'FTDNA font, style and color standards',
        linkTo: linkTo('Typography & Colors'),
        matDoc: null
      },
      {
        title: 'Layout',
        description: 'Essential building blocks for presenting your content.',
        linkTo: linkTo('Layout'),
        matDoc: "https://material.angular.io/components/categories/layout"
      },
      {
        title: 'Buttons & Indicators',
        description: 'Buttons, toggles, status and progress indicators.',
        linkTo: linkTo('Buttons & Indicators'),
        matDoc: "https://material.angular.io/components/categories/buttons"
      },
      {
        title: 'Forms',
        description: 'Controls that collect and validate user input.',
        linkTo: linkTo('Forms'),
        matDoc: "https://material.angular.io/components/categories/forms"
      },
      {
        title: 'Popups & Modals',
        description: 'Floating components that can be dynamically shown or hidden.',
        linkTo: linkTo('Popups & Modals'),
        matDoc: "https://material.angular.io/components/categories/modals"
      },
      {
        title: 'Data Tables',
        description: 'Tools for displaying and interacting with tabular data.',
        linkTo: linkTo('Data Table'),
        matDoc: "https://material.angular.io/components/categories/tables"
      },
      {
        title: 'Navigation',
        description: 'Menus, sidenavs and toolbars that organise your content.',
        linkTo: linkTo('Navigation'),
        matDoc: "https://material.angular.io/components/categories/nav"
      }
    ];
  }
}

interface Item {
  title: string;
  description: string;
  linkTo: () => void;
  matDoc: string;
}
