export class Recipe {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  seasons: string[];
  effort: Effort;
  diets: Diet[] = [];
  categories: string[] = [];
  ingredients: IngredientList;
}

export class Effort {
  constructor(public size: Size, public displayText: string) {
  }
}

export enum Size {
  low = 1, medium, high
}

export class Diet {
  constructor(public code: string, public displayText: string) {
  }
}

export class IngredientList {
  constructor(public portions: number, public ingredients: Ingredient[]) {
  }
}

export class Step {
  constructor(public id: string, public step: number) {
  }
}

export class Unit {
  constructor(public abbreviation: string, public name: string) {
  }
}

export class Ingredient {
  public productId: string;
  public name: string;
  public amount: number;
  public portions: number;
  public unit?: Unit;
  public comment?: string;
  public step?: Step;

  constructor();
  constructor(builder?: Ingredient.Builder) {
    return builder?.build();
  }
}

export namespace Ingredient {
  export class Builder {
    private productId: string;
    private name: string;
    private amount: number;
    private portions: number;
    private unit?: Unit;
    private comment?: string;
    private step?: Step;

    public withProductId(productId: string): Builder {
      this.productId = productId;
      return this;
    }

    public withName(name: string): Builder {
      this.name = name;
      return this;
    }

    public withAmount(amount: number): Builder {
      this.amount = amount;
      return this;
    }

    public withPortions(portions: number): Builder {
      this.portions = portions;
      return this;
    }

    public withUnit(unit: Unit): Builder {
      this.unit = unit;
      return this;
    }

    public withComment(comment: string): Builder {
      this.comment = comment;
      return this;
    }

    public withStep(step: Step): Builder {
      this.step = step;
      return this;
    }

    public build(): Ingredient {
      let ingredient = new Ingredient()
      ingredient.productId = this.productId;
      ingredient.name = this.name;
      ingredient.amount = this.amount;
      ingredient.portions = this.portions;
      ingredient.unit = this.unit;
      ingredient.comment = this.comment;
      ingredient.step = this.step;
      return ingredient;
    }
  }
}
