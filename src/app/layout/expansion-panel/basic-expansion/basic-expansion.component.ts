import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-expansion',
  templateUrl: './basic-expansion.component.html',
  styleUrls: ['./basic-expansion.component.scss']
})
export class BasicExpansionComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit() {
  }

}
