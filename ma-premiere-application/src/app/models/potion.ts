import { Ingredient } from './ingredient';

export class Potion {
    private _id: number;
    private _name: string;
    private _effect: string;
    private _ingredients: Ingredient[];

    constructor(name: string, effect: string, ingredients: Ingredient[]) {
        this.name = name;
        this.effect = effect;
        this._ingredients = ingredients;

        if (!ingredients) {
            this._ingredients = [];

            // ingredients.forEach(el => {
            //     this._ingredients.push(new Ingredient(el, 0));
            // });
        }
     }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get effect(): string {
        return this._effect;
    }
    public set effect(v: string) {
        this._effect = v;
    }
    public get ingredients(): Ingredient[] {
        return this._ingredients;
    }
}
