import {Component, OnInit} from '@angular/core';
import {PlanDefinition} from 'fhir/r4';
import {FhirService} from '../../services/fhir/fhir.service';
import {ActivatedRoute} from '@angular/router';
import {AppTitleService} from '../../services/app-title/app-title.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  planDefinition: PlanDefinition;

  constructor(private fhirService: FhirService, private route: ActivatedRoute, private appTitleService: AppTitleService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      this.fhirService.fhirClient.read({
        resourceType: 'PlanDefinition', id
      }).then((resource) => {
        this.planDefinition = (resource as PlanDefinition);
        this.appTitleService.next(this.planDefinition.title);
      });
    });
  }
}
