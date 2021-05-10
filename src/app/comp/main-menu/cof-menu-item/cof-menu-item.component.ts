import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './cof-menu-item.component.html',
  styleUrls: ['./cof-menu-item.component.scss'],
})
export class CofMenuItemComponent implements OnInit {

  @Input()
  text: string;

  @Input()
  iconName: string;

  constructor() {
  }

  ngOnInit() {
  }

}
