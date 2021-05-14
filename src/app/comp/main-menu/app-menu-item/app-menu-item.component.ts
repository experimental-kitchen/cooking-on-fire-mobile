import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

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

  @Input()
  navigationTargets: string[];

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  navigateTo(targets: string[]): void {
    this.router.navigate(targets);
  }
}
