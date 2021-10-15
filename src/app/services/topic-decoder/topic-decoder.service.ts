import {Injectable} from '@angular/core';
import {CodeableConcept, Coding, DomainResource} from 'fhir/r4';
import {CodeSystem} from './code-system';
@Injectable({
  providedIn: 'root'
})
export class TopicDecoderService {

  constructor() {
  }

  getCode<T extends DomainResource & { topic?: CodeableConcept[] }>(resource: T, codeSystem: CodeSystem): string[] {
    if (!resource.topic) {
      return [];
    }

    return this.translateCoding(resource, codeSystem, (coding) => coding.code);
  }

  decode<T extends DomainResource & { topic?: CodeableConcept[] }>(resource: T, codeSystem: CodeSystem): string[] {
    if (!resource.topic) {
      return [];
    }

    return this.translateCoding(resource, codeSystem, (coding) => coding.display);
  }

  private translateCoding<T extends DomainResource & { topic?: CodeableConcept[] }>(resource: T, codeSystem: CodeSystem,
                                                                                    codeOrDisplay: (coding: Coding) => string): string[] {
    return resource.topic.filter(codeableConcept => this.filterCodings(codeableConcept.coding, codeSystem))
      .flatMap(codeableConcept => codeableConcept.coding)
      .map(coding => codeOrDisplay(coding));
  }

  private filterCodings(codings: Coding[], system: CodeSystem): Coding {
    if (!codings) {
      return;
    }
    return codings.find((coding) => coding.system === system.toString() && coding.display);
  }

}
