import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipes-list-item',
  templateUrl: './recipes-list-item.component.html',
  styleUrls: ['./recipes-list-item.component.scss'],
})
export class RecipesListItemComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  categories: string[];

  constructor() {
  }

  ngOnInit() {
  }

}
