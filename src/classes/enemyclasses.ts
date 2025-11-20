import { Personagem } from '../personagem';
import type { habilidade } from '../interface';

export class Mago extends Personagem{
    mana: number = 0;
    constructor(mana: number,health:number,name:string,birthcity:string,habilidades:habilidade[],inteligence:number,power:number){
        super(health,name,birthcity,habilidades,inteligence,power);
        this.mana = mana;
    }
    setMana(m:number){this.mana = m;}
    getMana(){return this.mana;}
}

export class Tanque extends Personagem{
    healthregen : number = 0;
    constructor(healthregen: number, health:number,name:string,birthcity:string,habilidades:habilidade[],inteligence:number,power:number){
        super(health,name,birthcity,habilidades,inteligence,power);
        this.healthregen = healthregen;
    }
    setHealthregen(healthregen:number){this.healthregen = healthregen;}
    getHealthregen(){return this.healthregen;}
}

