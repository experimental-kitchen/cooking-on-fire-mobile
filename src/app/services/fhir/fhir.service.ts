import {Injectable} from '@angular/core';
import Client from 'fhir-kit-client';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FhirService {
  private readonly client: Client;

  get fhirClient(): Client {
    return this.client;
  }

  constructor() {
    this.client = new Client({baseUrl: environment.fhirBaseUrl});
  }
}
