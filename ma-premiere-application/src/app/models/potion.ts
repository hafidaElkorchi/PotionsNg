export class Potion {
    private _name: string;
    private _effect: string;

    constructor(name: string) {
        this.name = name;
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
}
