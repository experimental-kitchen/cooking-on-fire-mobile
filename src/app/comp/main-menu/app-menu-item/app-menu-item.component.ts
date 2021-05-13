import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './app-menu-item.component.html',
  styleUrls: ['./app-menu-item.component.scss'],
})
export class AppMenuItemComponent implements OnInit {

  @Input()
  text: string;

  @Input()
  iconName: string;

  @Input()
  lines: string;

  constructor() {
  }

  ngOnInit() {
  }

}
