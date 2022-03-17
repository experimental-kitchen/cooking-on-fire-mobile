import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {CodeSystem} from '../../services/topic-decoder/code-system';
import {Effort, Recipe, Size} from '../../model/recipe';

@Component({
  selector: 'app-effort-spoons',
  templateUrl: './effort-spoons.component.html',
  styleUrls: ['./effort-spoons.component.scss'],
})
export class EffortSpoonsComponent implements OnChanges {

  @Input()
  recipe: Recipe;
  iconEnabledStyle = {
    color: 'var(--ion-color-primary)'
  };
  iconDisabledStyle = {
    color: 'var(--ion-color-light)'
  };
  lowEffortStyle = this.iconEnabledStyle;
  mediumEffortStyle = this.iconEnabledStyle;
  highEffortStyle = this.iconEnabledStyle;

  codeSystem = CodeSystem;

  ngOnChanges(changes: SimpleChanges): void {
    this.setEffortStyles(this.recipe.effort);
  }

  private setEffortStyles(effort: Effort) {
    if (effort !== undefined && effort.size === Size.medium) {
      this.highEffortStyle = this.iconDisabledStyle;
    } else if (effort !== undefined && effort.size === Size.low) {
      this.highEffortStyle = this.iconDisabledStyle;
      this.mediumEffortStyle = this.iconDisabledStyle;
    }
  }
}


