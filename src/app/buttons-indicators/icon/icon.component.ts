import { Component } from '@angular/core';
import { IconList } from './iconlist';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  icons: string[] = IconList;
}
