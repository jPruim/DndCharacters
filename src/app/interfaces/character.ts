import { Spell } from './spell';

export interface Character {
    stats:Array<number>;
    spellCastAbility: number;
    spellList:Array<Spell>;
    class:string;
    level:number;
    spellSlots: any;
}
