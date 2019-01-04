export class Ingredients {
    private _id: number;
    private _name: string;

    constructor(id: number, name: string) {
        this.name = name;
        this.id = id;
    }

     public get id(): number {
        return this._id;
    }
    public set id(v: number) {
        this._id = v;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
}
