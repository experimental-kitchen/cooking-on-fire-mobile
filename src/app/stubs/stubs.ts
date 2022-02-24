import {PlanDefinition} from 'fhir/r4';
import {Recipe} from '../model/recipe';
import {Unit} from '../model/unit';

export namespace stubs {
  export const planDefinition: PlanDefinition = {
    'resourceType': 'PlanDefinition',
    'id': 'a05feeec-019a-4e29-ad2b-b7c3b3940f49',
    'meta': {
      'versionId': '8',
      'lastUpdated': '2021-07-26T10:07:22.876+00:00',
      'source': '#Spl7MhwGbraVqdGu',
      'profile': [
        'http://cooking-on-fire.ch/fhir/StructureDefinition/cof-plandefinition'
      ]
    },
    'contained': [
      {
        'resourceType': 'ActivityDefinition',
        'id': 'd1beee57-bf0f-422d-8767-e5286c872b3e',
        'meta': {
          'profile': [
            'http://cooking-on-fire.ch/fhir/StructureDefinition/cof-activitydefinition'
          ]
        },
        'status': 'active',
        'description': 'Teig auf ein mit Backpapier belegtes Blech legen. Joghurt darauf verteilen.',
        'productReference': {
          'reference': '#40c44b70-ef56-4d06-ae59-fc2c813d866a'
        }
      },
      {
        'resourceType': 'Substance',
        'id': '40c44b70-ef56-4d06-ae59-fc2c813d866a',
        'meta': {
          'profile': [
            'http://cooking-on-fire.ch/fhir/StructureDefinition/cof-substance'
          ]
        },
        'code': {
          'text': 'Product of a recipe step'
        },
        'ingredient': [
          {
            'quantity': {
              'numerator': {
                'value': 1
              },
              'denominator': {
                'value': 2,
                'unit': 'Portion(en)',
                'system': 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-unit',
                'code': 'Portion(en)'
              }
            },
            'substanceCodeableConcept': {
              'extension': [
                {
                  'url': 'http://cooking-on-fire.ch/fhir/StructureDefinition/cof-comment',
                  'valueString': '(ca. 25 x 48 cm)'
                }
              ],
              'text': 'ausgewallter Kuchenteig rechteckig'
            }
          },
          {
            'quantity': {
              'numerator': {
                'value': 150,
                'unit': 'Gramm',
                'system': 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-unit',
                'code': 'g'
              },
              'denominator': {
                'value': 2,
                'unit': 'Portion(en)',
                'system': 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-unit',
                'code': 'Portion(en)'
              }
            },
            'substanceCodeableConcept': {
              'text': 'griechisches Joghurt nature'
            }
          }
        ]
      },
      {
        'resourceType': 'ActivityDefinition',
        'id': '29e81bac-926f-40b3-a3f8-503d320ac5fe',
        'meta': {
          'profile': [
            'http://cooking-on-fire.ch/fhir/StructureDefinition/cof-activitydefinition'
          ]
        },
        'status': 'active',
        'description': 'Unteres Drittel der Spargeln schälen und Spargeln schräg in Stücke schneiden. 1/2 Bund Basilikum fein schneiden. Beides mit dem Öl mischen, würzen, auf dem Teig verteilen.',
        'productReference': {
          'reference': '#7f18f11f-f85f-4801-a012-076ac23fd449'
        }
      },
      {
        'resourceType': 'Substance',
        'id': '7f18f11f-f85f-4801-a012-076ac23fd449',
        'meta': {
          'profile': [
            'http://cooking-on-fire.ch/fhir/StructureDefinition/cof-substance'
          ]
        },
        'code': {
          'text': 'Product of a recipe step'
        },
        'ingredient': [
          {
            'quantity': {
              'numerator': {
                'value': 500,
                'unit': 'Gramm',
                'system': 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-unit',
                'code': 'g'
              },
              'denominator': {
                'value': 2,
                'unit': 'Portion(en)',
                'system': 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-unit',
                'code': 'Portion(en)'
              }
            },
            'substanceCodeableConcept': {
              'text': 'grüne Spargeln'
            }
          },
          {
            'quantity': {
              'numerator': {
                'value': 0.5,
                'unit': 'Bund',
                'system': 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-unit',
                'code': 'Bund'
              },
              'denominator': {
                'value': 2,
                'unit': 'Portion(en)',
                'system': 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-unit',
                'code': 'Portion(en)'
              }
            },
            'substanceCodeableConcept': {
              'text': 'Basilikum'
            }
          },
          {
            'quantity': {
              'numerator': {
                'value': 1,
                'unit': 'Esslöffel',
                'system': 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-unit',
                'code': 'EL'
              },
              'denominator': {
                'value': 2,
                'unit': 'Portion(en)',
                'system': 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-unit',
                'code': 'Portion(en)'
              }
            },
            'substanceCodeableConcept': {
              'text': 'Olivenöl'
            }
          },
          {
            'quantity': {
              'numerator': {
                'value': 0.5,
                'unit': 'Teelöffel',
                'system': 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-unit',
                'code': 'TL'
              },
              'denominator': {
                'value': 2,
                'unit': 'Portion(en)',
                'system': 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-unit',
                'code': 'Portion(en)'
              }
            },
            'substanceCodeableConcept': {
              'text': 'Pfeffer'
            }
          }
        ]
      },
      {
        'resourceType': 'ActivityDefinition',
        'id': '87d278ce-8f18-4059-82c1-83f027852286',
        'meta': {
          'profile': [
            'http://cooking-on-fire.ch/fhir/StructureDefinition/cof-activitydefinition'
          ]
        },
        'status': 'active',
        'description': 'Ca. 30 min auf der untersten Rille des auf 220 Grad vorgeheizten Ofens backen. Herausnehmen, Bresaola und restlichen Basilikum darauf verteilen.',
        'productReference': {
          'reference': '#1e22f1e0-e100-423b-8735-2ec0579dbfa2'
        }
      },
      {
        'resourceType': 'Substance',
        'id': '1e22f1e0-e100-423b-8735-2ec0579dbfa2',
        'meta': {
          'profile': [
            'http://cooking-on-fire.ch/fhir/StructureDefinition/cof-substance'
          ]
        },
        'code': {
          'text': 'Product of a recipe step'
        },
        'ingredient': [
          {
            'quantity': {
              'numerator': {
                'value': 100,
                'unit': 'Gramm',
                'system': 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-unit',
                'code': 'g'
              },
              'denominator': {
                'value': 2,
                'unit': 'Portion(en)',
                'system': 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-unit',
                'code': 'Portion(en)'
              }
            },
            'substanceCodeableConcept': {
              'text': 'Bresaola in Tranchen'
            }
          },
          {
            'quantity': {
              'numerator': {
                'value': 0.5,
                'unit': 'Bund',
                'system': 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-unit',
                'code': 'Bund'
              },
              'denominator': {
                'value': 2,
                'unit': 'Portion(en)',
                'system': 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-unit',
                'code': 'Portion(en)'
              }
            },
            'substanceCodeableConcept': {
              'text': 'Basilikum'
            }
          }
        ]
      }
    ],
    'extension': [
      {
        'url': 'http://cooking-on-fire.ch/fhir/StructureDefinition/cof-comment',
        'valueString': 'Alternativ Dinkelkuchenteig verwenden oder Teig selber machen'
      }
    ],
    'title': 'Spargeltarte mit Bresaola',
    'subtitle': 'Italien',
    'status': 'active',
    'date': '2021-04-28T20:00:00.000+02:00',
    'publisher': 'Household Cook',
    'topic': [
      {
        'coding': [
          {
            'system': 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-recipecategory',
            'code': 'starter',
            'display': 'Vorspeise'
          }
        ]
      },
      {
        'coding': [
          {
            'system': 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-recipecategory',
            'code': 'main-dish',
            'display': 'Hauptspeise'
          }
        ]
      },
      {
        'coding': [
          {
            'system': 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-effort',
            'code': '1',
            'display': 'Geht ganz schnell'
          }
        ]
      },
      {
        'coding': [
          {
            'system': 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-season',
            'code': 'spring',
            'display': 'Frühling'
          }
        ]
      }
    ],
    'relatedArtifact': [
      {
        'type': 'documentation',
        'url': 'https://raw.githubusercontent.com/experimental-kitchen/cooking-on-fire-ig/main/input/images/asparagus-tart-with-bresaola.png'
      }
    ],
    'action': [
      {
        'prefix': '1.',
        'title': 'Schritt',
        'definitionCanonical': '#d1beee57-bf0f-422d-8767-e5286c872b3e'
      },
      {
        'prefix': '2.',
        'title': 'Schritt',
        'definitionCanonical': '#29e81bac-926f-40b3-a3f8-503d320ac5fe'
      },
      {
        'prefix': '3.',
        'title': 'Schritt',
        'definitionCanonical': '#87d278ce-8f18-4059-82c1-83f027852286'
      }
    ]
  };

  export const recipe: Recipe =
    {
      'diets': [],
      'categories': [
        'Vorspeise',
        'Hauptspeise'
      ],
      'id': 'a05feeec-019a-4e29-ad2b-b7c3b3940f49',
      'title': 'Spargeltarte mit Bresaola',
      'subtitle': 'Italien',
      'imageUrl': 'https://raw.githubusercontent.com/experimental-kitchen/cooking-on-fire-ig/main/input/images/asparagus-tart-with-bresaola.png',
      'effort': {
        'size': 1,
        'displayText': 'Geht ganz schnell'
      },
      'seasons': [
        'spring'
      ],
      'ingredients': {
        'portions': 2,
        'ingredients': [
          {
            'productId': '40c44b70-ef56-4d06-ae59-fc2c813d866a',
            'name': 'ausgewallter Kuchenteig rechteckig',
            'amount': 1,
            'portions': 2,
            'unit': null,
            'comment': '(ca. 25 x 48 cm)',
            'step': {
              'id': 'd1beee57-bf0f-422d-8767-e5286c872b3e',
              'step': 1
            }
          },
          {
            'productId': '40c44b70-ef56-4d06-ae59-fc2c813d866a',
            'name': 'griechisches Joghurt nature',
            'amount': 150,
            'portions': 2,
            'unit': Unit.gramm,
            'step': {
              'id': 'd1beee57-bf0f-422d-8767-e5286c872b3e',
              'step': 1
            }
          },
          {
            'productId': '7f18f11f-f85f-4801-a012-076ac23fd449',
            'name': 'grüne Spargeln',
            'amount': 500,
            'portions': 2,
            'unit': Unit.gramm,
            'step': {
              'id': '29e81bac-926f-40b3-a3f8-503d320ac5fe',
              'step': 2
            }
          },
          {
            'productId': '7f18f11f-f85f-4801-a012-076ac23fd449',
            'name': 'Basilikum',
            'amount': 0.5,
            'portions': 2,
            'step': {
              'id': '29e81bac-926f-40b3-a3f8-503d320ac5fe',
              'step': 2
            }
          },
          {
            'productId': '7f18f11f-f85f-4801-a012-076ac23fd449',
            'name': 'Olivenöl',
            'amount': 1,
            'portions': 2,
            'step': {
              'id': '29e81bac-926f-40b3-a3f8-503d320ac5fe',
              'step': 2
            }
          },
          {
            'productId': '7f18f11f-f85f-4801-a012-076ac23fd449',
            'name': 'Pfeffer',
            'amount': 0.5,
            'portions': 2,
            'step': {
              'id': '29e81bac-926f-40b3-a3f8-503d320ac5fe',
              'step': 2
            }
          },
          {
            'productId': '1e22f1e0-e100-423b-8735-2ec0579dbfa2',
            'name': 'Bresaola in Tranchen',
            'amount': 100,
            'portions': 2,
            'unit': Unit.gramm,
            'step': {
              'id': '87d278ce-8f18-4059-82c1-83f027852286',
              'step': 3
            }
          },
          {
            'productId': '1e22f1e0-e100-423b-8735-2ec0579dbfa2',
            'name': 'Basilikum',
            'amount': 0.5,
            'portions': 2,
            'step': {
              'id': '87d278ce-8f18-4059-82c1-83f027852286',
              'step': 3
            }
          }
        ]
      }
    };
}
