import {Injectable} from '@angular/core';
import {CodeableConcept, Coding, DomainResource} from 'fhir/r4';
import {CodeSystem} from './CodeSystem';

@Injectable({
  providedIn: 'root'
})
export class TopicDecoderService {

  constructor() {
  }

  decode<T extends DomainResource & { topic?: CodeableConcept[] }>(resource: T, codeSystem: CodeSystem): string[] {
    if (!resource.topic) {
      return [];
    }

    return resource.topic.filter(codeableConcept => this.filterCodings(codeableConcept.coding, codeSystem))
      .flatMap(codeableConcept => codeableConcept.coding)
      .map(coding => coding.display);
  }

  private filterCodings(codings: Coding[], system: CodeSystem): Coding {
    if (!codings) {
      return;
    }
    return codings.find((coding) => coding.system === system.toString() && coding.display);
  }

}
