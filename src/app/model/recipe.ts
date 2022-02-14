import {Unit} from './unit';

export class Recipe {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  seasons: string[];
  effort: Effort;
  diets: Diet[];
  categories: string[];
  subCategory: string;
  ingredients: IngredientList;
}

export class Effort {
  constructor(private _size: Size, private _displayText: string) {
  }

  get size(): Size {
    return this._size;
  }

  get displayText(): string {
    return this._displayText;
  }
}

export enum Size {
  low = 1, medium, high
}

export class Diet {
  constructor(private _code: string, private _displayText: string) {
  }

  get code(): string {
    return this._code;
  }

  get displayText(): string {
    return this._displayText;
  }
}

export class IngredientList {
  constructor(private _portions: number, private _ingredients: Ingredient[]) {
  }

  get portions(): number {
    return this._portions;
  }

  get ingredients(): Ingredient[] {
    return this._ingredients;
  }
}

export class Step {
  private readonly _id: string;
  private readonly _step: number;

  constructor(id: string, step: number) {
    this._id = id;
    this._step = step;
  }

  get id(): string {
    return this._id;
  }

  get step(): number {
    return this._step;
  }
}

export class Ingredient {

  private _step: Step;

  constructor(private _productId, private _unit: Unit, private _name: string, private _amount: number, private _portions: number,
              private _comment: string) {
  }


  get productId() {
    return this._productId;
  }

  set productId(value) {
    this._productId = value;
  }

  get unit(): Unit {
    return this._unit;
  }

  set unit(value: Unit) {
    this._unit = value;
  }

  get name(): string {
    return this._name;
  }

  get amount(): number {
    return this._amount;
  }

  get portions(): number {
    return this._portions;
  }

  get comment(): string {
    return this._comment;
  }

  get step(): Step {
    return this._step;
  }

  set step(value: Step) {
    this._step = value;
  }

  set name(value: string) {
    this._name = value;
  }

  set amount(value: number) {
    this._amount = value;
  }

  set portions(value: number) {
    this._portions = value;
  }

  set comment(value: string) {
    this._comment = value;
  }
}
