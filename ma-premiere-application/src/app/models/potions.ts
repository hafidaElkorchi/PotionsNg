import { Potion } from './potion';
import { Ingredient } from './ingredient';

export const potions: Potion[] = [
    new Potion('Veritaserum', 'effect of Veritaserum', [new Ingredient('one', 1)]),
    new Potion('Polynectar', 'effect of Polynectar', [new Ingredient('one', 1), new Ingredient('two', 2)]),
    new Potion('Amnésie', 'effect of Amnésie', []),
    new Potion('Ratatinage', 'effect of Ratatinage', []),
    new Potion('Felix felicis', 'effect of Felix felicis', [new Ingredient('one', 1), new Ingredient('two', 2), new Ingredient('three', 3)])
];
