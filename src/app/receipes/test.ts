import {Bundle, OperationOutcome} from 'fhir/r4';

export const bundleResult: (OperationOutcome | (Bundle & { type: 'searchset' })) = {
  resourceType: 'Bundle',
  id: '22a17288-3c7a-4411-a760-6f10c00872af',
  meta: {
    lastUpdated: '2021-07-01T19:55:36.543+00:00'
  },
  type: 'searchset',
  total: 2,
  link: [
    {
      relation: 'self',
      url: 'http://hapi.fhir.org/baseR4/PlanDefinition?publisher=Household%20Cook&status=active'
    }
  ],
  entry: [
    {
      fullUrl: 'http://hapi.fhir.org/baseR4/PlanDefinition/a05feeec-019a-4e29-ad2b-b7c3b3940f49',
      resource: {
        resourceType: 'PlanDefinition',
        id: 'a05feeec-019a-4e29-ad2b-b7c3b3940f49',
        meta: {
          versionId: '7',
          lastUpdated: '2021-06-20T15:26:22.491+00:00',
          source: '#P221FF9K4C4W2Mur',
          profile: [
            'http://cooking-on-fire.ch/fhir/StructureDefinition/cof-plandefinition'
          ]
        },
        contained: [
          {
            resourceType: 'ActivityDefinition',
            id: 'd1beee57-bf0f-422d-8767-e5286c872b3e',
            meta: {
              profile: [
                'http://cooking-on-fire.ch/fhir/StructureDefinition/cof-activitydefinition'
              ]
            },
            status: 'active',
            description: 'Teig auf ein mit Backpapier belegtes Blech legen. Joghurt darauf verteilen.',
            productReference: {
              reference: '#40c44b70-ef56-4d06-ae59-fc2c813d866a'
            }
          },
          {
            resourceType: 'Substance',
            id: '40c44b70-ef56-4d06-ae59-fc2c813d866a',
            meta: {
              profile: [
                'http://cooking-on-fire.ch/fhir/StructureDefinition/cof-substance'
              ]
            },
            code: {
              text: 'Product of a recipe step'
            },
            ingredient: [
              {
                quantity: {
                  numerator: {
                    value: 1
                  },
                  denominator: {
                    value: 2,
                    unit: 'Portion(en)',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'Portion(en)'
                  }
                },
                substanceCodeableConcept: {
                  extension: [
                    {
                      url: 'http://cooking-on-fire.ch/fhir/StructureDefinition/cof-comment',
                      valueString: '(ca. 25 x 48 cm)'
                    }
                  ],
                  text: 'ausgewallter Kuchenteig rechteckig'
                }
              },
              {
                quantity: {
                  numerator: {
                    value: 150,
                    unit: 'Gramm',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'g'
                  },
                  denominator: {
                    value: 2,
                    unit: 'Portion(en)',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'Portion(en)'
                  }
                },
                substanceCodeableConcept: {
                  text: 'griechisches Joghurt nature'
                }
              }
            ]
          },
          {
            resourceType: 'ActivityDefinition',
            id: '29e81bac-926f-40b3-a3f8-503d320ac5fe',
            meta: {
              profile: [
                'http://cooking-on-fire.ch/fhir/StructureDefinition/cof-activitydefinition'
              ]
            },
            status: 'active',
            description: 'Unteres Drittel der Spargeln schälen und Spargeln schräg in Stücke schneiden. 1/2 Bund Basilikum '
              + 'fein schneiden. Beides mit dem Öl mischen, würzen, auf dem Teig verteilen.',
            productReference: {
              reference: '#7f18f11f-f85f-4801-a012-076ac23fd449'
            }
          },
          {
            resourceType: 'Substance',
            id: '7f18f11f-f85f-4801-a012-076ac23fd449',
            meta: {
              profile: [
                'http://cooking-on-fire.ch/fhir/StructureDefinition/cof-substance'
              ]
            },
            code: {
              text: 'Product of a recipe step'
            },
            ingredient: [
              {
                quantity: {
                  numerator: {
                    value: 500,
                    unit: 'Gramm',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'g'
                  },
                  denominator: {
                    value: 2,
                    unit: 'Portion(en)',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'Portion(en)'
                  }
                },
                substanceCodeableConcept: {
                  text: 'grüne Spargeln'
                }
              },
              {
                quantity: {
                  numerator: {
                    value: 0.5,
                    unit: 'Bund',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'Bund'
                  },
                  denominator: {
                    value: 2,
                    unit: 'Portion(en)',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'Portion(en)'
                  }
                },
                substanceCodeableConcept: {
                  text: 'Basilikum'
                }
              },
              {
                quantity: {
                  numerator: {
                    value: 1,
                    unit: 'Esslöffel',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'EL'
                  },
                  denominator: {
                    value: 2,
                    unit: 'Portion(en)',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'Portion(en)'
                  }
                },
                substanceCodeableConcept: {
                  text: 'Olivenöl'
                }
              },
              {
                quantity: {
                  numerator: {
                    value: 0.5,
                    unit: 'Teelöffel',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'TL'
                  },
                  denominator: {
                    value: 2,
                    unit: 'Portion(en)',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'Portion(en)'
                  }
                },
                substanceCodeableConcept: {
                  text: 'Pfeffer'
                }
              }
            ]
          },
          {
            resourceType: 'ActivityDefinition',
            id: '87d278ce-8f18-4059-82c1-83f027852286',
            meta: {
              profile: [
                'http://cooking-on-fire.ch/fhir/StructureDefinition/cof-activitydefinition'
              ]
            },
            status: 'active',
            description: 'Ca. 30 min auf der untersten Rille des auf 220 Grad vorgeheizten Ofens backen. Herausnehmen, '
              + 'Bresaola und restlichen Basilikum darauf verteilen.',
            productReference: {
              reference: '#1e22f1e0-e100-423b-8735-2ec0579dbfa2'
            }
          },
          {
            resourceType: 'Substance',
            id: '1e22f1e0-e100-423b-8735-2ec0579dbfa2',
            meta: {
              profile: [
                'http://cooking-on-fire.ch/fhir/StructureDefinition/cof-substance'
              ]
            },
            code: {
              text: 'Product of a recipe step'
            },
            ingredient: [
              {
                quantity: {
                  numerator: {
                    value: 100,
                    unit: 'Gramm',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'g'
                  },
                  denominator: {
                    value: 2,
                    unit: 'Portion(en)',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'Portion(en)'
                  }
                },
                substanceCodeableConcept: {
                  text: 'Bresaola in Tranchen'
                }
              },
              {
                quantity: {
                  numerator: {
                    value: 0.5,
                    unit: 'Bund',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'Bund'
                  },
                  denominator: {
                    value: 2,
                    unit: 'Portion(en)',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'Portion(en)'
                  }
                },
                substanceCodeableConcept: {
                  text: 'Basilikum'
                }
              }
            ]
          }
        ],
        extension: [
          {
            url: 'http://cooking-on-fire.ch/fhir/StructureDefinition/cof-comment',
            valueString: 'Alternativ Dinkelkuchenteig verwenden oder Teig selber machen'
          }
        ],
        title: 'Spargeltarte mit Bresaola',
        subtitle: 'Italien',
        status: 'active',
        date: '2021-04-28T20:00:00.000+02:00',
        publisher: 'Household Cook',
        topic: [
          {
            coding: [
              {
                system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-recipecategory',
                code: 'starter',
                display: 'Vorspeise'
              }
            ]
          },
          {
            coding: [
              {
                system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-recipecategory',
                code: 'main-dish',
                display: 'Hauptspeise'
              }
            ]
          },
          {
            coding: [
              {
                system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-effort',
                code: '1',
                display: 'Geht ganz schnell'
              }
            ]
          },
          {
            coding: [
              {
                system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-season',
                code: 'spring',
                display: 'Frühling'
              }
            ]
          }
        ],
        relatedArtifact: [
          {
            type: 'documentation',
            url: 'https://raw.githubusercontent.com/experimental-kitchen/cooking-on-fire-ig/main/input/images/'
              + 'asparagus-tart-with-bresaola.png'
          }
        ],
        action: [
          {
            prefix: '1.',
            title: 'Schritt',
            definitionCanonical: '#d1beee57-bf0f-422d-8767-e5286c872b3e'
          },
          {
            prefix: '2.',
            title: 'Schritt',
            definitionCanonical: '#29e81bac-926f-40b3-a3f8-503d320ac5fe'
          },
          {
            prefix: '3.',
            title: 'Schritt',
            definitionCanonical: '#87d278ce-8f18-4059-82c1-83f027852286'
          }
        ]
      },
      search: {
        mode: 'match'
      }
    },
    {
      fullUrl: 'http://hapi.fhir.org/baseR4/PlanDefinition/2bd95802-2006-484f-b01d-ab86b53608bd',
      resource: {
        resourceType: 'PlanDefinition',
        id: '2bd95802-2006-484f-b01d-ab86b53608bd',
        meta: {
          versionId: '5',
          lastUpdated: '2021-06-20T15:26:37.277+00:00',
          source: '#CjR0P3VJQTAUgECt',
          profile: [
            'http://cooking-on-fire.ch/fhir/StructureDefinition/cof-plandefinition'
          ]
        },
        contained: [
          {
            resourceType: 'ActivityDefinition',
            id: '1a2216a0-f85f-4090-9dc2-9dd3976dfbc0',
            meta: {
              profile: [
                'http://cooking-on-fire.ch/fhir/StructureDefinition/cof-activitydefinition'
              ]
            },
            status: 'active',
            description: 'Füllung: Zwiebeln und Knoblauch andämpfen. Steinpilze mitbraten. Spinat und Rüebli kurz mitdämpfen, würzen.',
            productReference: {
              reference: '#303e7091-7bc0-4151-a0ec-8d587c9d8c63'
            }
          },
          {
            resourceType: 'Substance',
            id: '303e7091-7bc0-4151-a0ec-8d587c9d8c63',
            meta: {
              profile: [
                'http://cooking-on-fire.ch/fhir/StructureDefinition/cof-substance'
              ]
            },
            code: {
              text: 'Product of a recipe step'
            },
            ingredient: [
              {
                quantity: {
                  numerator: {
                    value: 1
                  },
                  denominator: {
                    value: 3,
                    unit: 'Portion(en)',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'Portion(en)'
                  }
                },
                substanceCodeableConcept: {
                  extension: [
                    {
                      url: 'http://cooking-on-fire.ch/fhir/StructureDefinition/cof-comment',
                      valueString: 'fein gehackt'
                    }
                  ],
                  text: 'Zwiebel'
                }
              },
              {
                quantity: {
                  numerator: {
                    value: 1
                  },
                  denominator: {
                    value: 3,
                    unit: 'Portion(en)',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'Portion(en)'
                  }
                },
                substanceCodeableConcept: {
                  extension: [
                    {
                      url: 'http://cooking-on-fire.ch/fhir/StructureDefinition/cof-comment',
                      valueString: 'gepresst'
                    }
                  ],
                  text: 'Knoblauchzehe'
                }
              },
              {
                quantity: {
                  numerator: {
                    value: 40,
                    unit: 'Gramm',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'g'
                  },
                  denominator: {
                    value: 3,
                    unit: 'Portion(en)',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'Portion(en)'
                  }
                },
                substanceCodeableConcept: {
                  text: 'getrocknete Steinpilze'
                }
              },
              {
                quantity: {
                  numerator: {
                    value: 1,
                    unit: 'Kilogramm',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'kg'
                  },
                  denominator: {
                    value: 3,
                    unit: 'Portion(en)',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'Portion(en)'
                  }
                },
                substanceCodeableConcept: {
                  extension: [
                    {
                      url: 'http://cooking-on-fire.ch/fhir/StructureDefinition/cof-comment',
                      valueString: 'blanchiert'
                    }
                  ],
                  text: 'Spinat'
                }
              },
              {
                quantity: {
                  numerator: {
                    value: 200,
                    unit: 'Gramm',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'g'
                  },
                  denominator: {
                    value: 3,
                    unit: 'Portion(en)',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'Portion(en)'
                  }
                },
                substanceCodeableConcept: {
                  extension: [
                    {
                      url: 'http://cooking-on-fire.ch/fhir/StructureDefinition/cof-comment',
                      valueString: 'geschält, klein gewürfelt'
                    }
                  ],
                  text: 'Rüebli'
                }
              },
              {
                quantity: {
                  numerator: {
                    value: 1,
                    unit: 'Esslöffel',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'EL'
                  },
                  denominator: {
                    value: 3,
                    unit: 'Portion(en)',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'Portion(en)'
                  }
                },
                substanceCodeableConcept: {
                  extension: [
                    {
                      url: 'http://cooking-on-fire.ch/fhir/StructureDefinition/cof-comment',
                      valueString: 'getrocknet, oder frisch und gehackt'
                    }
                  ],
                  text: 'Majoran'
                }
              },
              {
                substanceCodeableConcept: {
                  text: 'Salz'
                }
              },
              {
                substanceCodeableConcept: {
                  text: 'Pfeffer'
                }
              }
            ]
          },
          {
            resourceType: 'ActivityDefinition',
            id: 'befca50c-edfd-41fb-a5a9-af52b86a8136',
            meta: {
              profile: [
                'http://cooking-on-fire.ch/fhir/StructureDefinition/cof-activitydefinition'
              ]
            },
            status: 'active',
            description: 'Sauce: Alle Zutaten bis und mit Bouillon unter ständigem Rühren aufkochen. Bei kleiner '
              + 'Hitze 3 Minuten köcheln. Rahm und gut die Hälfte des Käses beifügen, würzen.',
            productReference: {
              reference: '#b028381e-de52-4b84-9979-fe4ef53cfe4c'
            }
          },
          {
            resourceType: 'Substance',
            id: 'b028381e-de52-4b84-9979-fe4ef53cfe4c',
            meta: {
              profile: [
                'http://cooking-on-fire.ch/fhir/StructureDefinition/cof-substance'
              ]
            },
            code: {
              text: 'Product of a recipe step'
            },
            ingredient: [
              {
                quantity: {
                  numerator: {
                    value: 3,
                    unit: 'Esslöffel',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'EL'
                  },
                  denominator: {
                    value: 3,
                    unit: 'Portion(en)',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'Portion(en)'
                  }
                },
                substanceCodeableConcept: {
                  text: 'Butter'
                }
              },
              {
                quantity: {
                  numerator: {
                    value: 3,
                    unit: 'Esslöffel',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'EL'
                  },
                  denominator: {
                    value: 3,
                    unit: 'Portion(en)',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'Portion(en)'
                  }
                },
                substanceCodeableConcept: {
                  text: 'Mehl'
                }
              },
              {
                quantity: {
                  numerator: {
                    value: 6,
                    unit: 'Deziliter',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'dl'
                  },
                  denominator: {
                    value: 3,
                    unit: 'Portion(en)',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'Portion(en)'
                  }
                },
                substanceCodeableConcept: {
                  text: 'Milch'
                }
              },
              {
                quantity: {
                  numerator: {
                    value: 1,
                    unit: 'Teelöffel',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'TL'
                  },
                  denominator: {
                    value: 3,
                    unit: 'Portion(en)',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'Portion(en)'
                  }
                },
                substanceCodeableConcept: {
                  text: 'Bouillon'
                }
              },
              {
                quantity: {
                  numerator: {
                    value: 1,
                    unit: 'Deziliter',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'dl'
                  },
                  denominator: {
                    value: 3,
                    unit: 'Portion(en)',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'Portion(en)'
                  }
                },
                substanceCodeableConcept: {
                  text: 'Rahm'
                }
              },
              {
                quantity: {
                  numerator: {
                    value: 90,
                    unit: 'Gramm',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'g'
                  },
                  denominator: {
                    value: 3,
                    unit: 'Portion(en)',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'Portion(en)'
                  }
                },
                substanceCodeableConcept: {
                  extension: [
                    {
                      url: 'http://cooking-on-fire.ch/fhir/StructureDefinition/cof-comment',
                      valueString: 'gerieben'
                    }
                  ],
                  text: 'rezenter Bergkäse'
                }
              },
              {
                substanceCodeableConcept: {
                  text: 'Salz'
                }
              },
              {
                substanceCodeableConcept: {
                  text: 'Pfeffer'
                }
              },
              {
                substanceCodeableConcept: {
                  text: 'Muskatnuss'
                }
              }
            ]
          },
          {
            resourceType: 'ActivityDefinition',
            id: '15dc8022-cf7e-49c3-ac53-c0a4349a63ae',
            meta: {
              profile: [
                'http://cooking-on-fire.ch/fhir/StructureDefinition/cof-activitydefinition'
              ]
            },
            status: 'active',
            description: 'Lagenweise Sauce, Füllung und Lasagneblätter in die vorbereitete Form schichten, '
              + 'mit Sauce abschliessen, mit restlichem Käse bestreuen. In der Mitte des auf 200°C vorgeheizten Ofens '
              + '40-45 Minuten gratinieren.',
            productReference: {
              reference: '#1f43d6fd-93c6-44de-8e03-7a06b8f8a297'
            }
          },
          {
            resourceType: 'Substance',
            id: '1f43d6fd-93c6-44de-8e03-7a06b8f8a297',
            meta: {
              profile: [
                'http://cooking-on-fire.ch/fhir/StructureDefinition/cof-substance'
              ]
            },
            code: {
              text: 'Product of a recipe step'
            },
            ingredient: [
              {
                quantity: {
                  numerator: {
                    value: 9
                  },
                  denominator: {
                    value: 3,
                    unit: 'Portion(en)',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'Portion(en)'
                  }
                },
                substanceCodeableConcept: {
                  extension: [
                    {
                      url: 'http://cooking-on-fire.ch/fhir/StructureDefinition/cof-comment',
                      valueString: 'für 3 Lagen'
                    }
                  ],
                  text: 'Lasagneblätter'
                }
              },
              {
                quantity: {
                  numerator: {
                    value: 90,
                    unit: 'Gramm',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'g'
                  },
                  denominator: {
                    value: 3,
                    unit: 'Portion(en)',
                    system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-units',
                    code: 'Portion(en)'
                  }
                },
                substanceCodeableConcept: {
                  extension: [
                    {
                      url: 'http://cooking-on-fire.ch/fhir/StructureDefinition/cof-comment',
                      valueString: 'gerieben'
                    }
                  ],
                  text: 'rezenter Bergkäse'
                }
              }
            ]
          }
        ],
        title: 'Spinatlasagne',
        status: 'active',
        date: '2021-05-14T14:00:00.000+02:00',
        publisher: 'Household Cook',
        topic: [
          {
            coding: [
              {
                system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-recipecategory',
                code: 'main-dish',
                display: 'Hauptspeise'
              }
            ]
          },
          {
            coding: [
              {
                system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-effort',
                code: '2',
                display: 'Ein bisschen was zu machen'
              }
            ]
          },
          {
            coding: [
              {
                system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-diet',
                code: 'vegetarian',
                display: 'vegetarisch'
              }
            ]
          },
          {
            coding: [
              {
                system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-season',
                code: 'spring',
                display: 'Frühling'
              }
            ]
          },
          {
            coding: [
              {
                system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-season',
                code: 'summer',
                display: 'Sommer'
              }
            ]
          },
          {
            coding: [
              {
                system: 'http://cooking-on-fire.ch/fhir/CodeSystem/cof-season',
                code: 'autumn',
                display: 'Herbst'
              }
            ]
          }
        ],
        relatedArtifact: [
          {
            type: 'documentation',
            url: 'https://raw.githubusercontent.com/experimental-kitchen/cooking-on-fire-ig/main/input/images/spinach-lasagne.png'
          }
        ],
        action: [
          {
            prefix: '1.',
            title: 'Schritt',
            definitionCanonical: '#1a2216a0-f85f-4090-9dc2-9dd3976dfbc0'
          },
          {
            prefix: '2.',
            title: 'Schritt',
            definitionCanonical: '#befca50c-edfd-41fb-a5a9-af52b86a8136'
          },
          {
            prefix: '3.',
            title: 'Schritt',
            definitionCanonical: '#15dc8022-cf7e-49c3-ac53-c0a4349a63ae'
          }
        ]
      },
      search: {
        mode: 'match'
      }
    }
  ]
};
