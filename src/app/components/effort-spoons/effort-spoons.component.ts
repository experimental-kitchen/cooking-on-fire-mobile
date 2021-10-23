import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {PlanDefinition} from 'fhir/r4';
import {TopicDecoderService} from '../../services/topic-decoder/topic-decoder.service';
import {CodeSystem} from '../../services/topic-decoder/code-system';

@Component({
  selector: 'app-effort-spoons',
  templateUrl: './effort-spoons.component.html',
  styleUrls: ['./effort-spoons.component.scss'],
})
export class EffortSpoonsComponent implements OnChanges {

  @Input()
  planDefinition: PlanDefinition;
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

  constructor(private topicDecoderService: TopicDecoderService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const efforts = this.topicDecoderService.getCode(this.planDefinition, this.codeSystem.cofEffort);
    this.setEffortStyles(efforts);
  }

  private setEffortStyles(efforts: string[]) {
    if (+efforts[0] === Effort.medium) {
      this.highEffortStyle = this.iconDisabledStyle;
    } else if (+efforts[0] === Effort.low) {
      this.highEffortStyle = this.iconDisabledStyle;
      this.mediumEffortStyle = this.iconDisabledStyle;
    }
  }
}

export enum Effort {
  low = 1, medium, high
}
