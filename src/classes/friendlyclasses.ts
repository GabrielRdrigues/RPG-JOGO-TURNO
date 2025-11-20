import { Personagem } from '../personagem';
import type { habilidade } from '../interface';
import type { jogavel } from '../jogavel';
export class Humano extends Personagem implements jogavel{
    inteligenceBuff : number = 1.2;

    constructor(health:number,name:string,birthcity:string,habilidades:habilidade[],inteligence:number,power:number){
        super(health,name,birthcity,habilidades,inteligence,power);
    }

    atacar(p:Personagem):void{
        p.setHealth(-this.getHabilidadeAtual().power);
    }

    fugir():void{
    }

    trocar_habilidade(habilidade:habilidade): void {
        this.habilidade_atual = habilidade;
    }

}

