import {Component, Input, OnChanges} from '@angular/core';
import {DietImageSortService} from '../../services/diet-image-sort/diet-image-sort.service';
import {CodeSystem} from '../../services/topic-decoder/code-system';
import {Recipe} from '../../model/recipe';

@Component({
  selector: 'app-diet-symbols',
  templateUrl: './diet-symbols.component.html',
  styleUrls: ['./diet-symbols.component.scss'],
})
export class DietSymbolsComponent implements OnChanges {

  @Input()
  recipe: Recipe;

  codeSystem = CodeSystem;

  imageNames: string[] = [];

  constructor(private dietImageSortService: DietImageSortService) {
  }

  ngOnChanges() {
    this.imageNames = this.recipe.diets?.sort(this.dietImageSortService.sort).map(diet => diet.code);
  }
}
