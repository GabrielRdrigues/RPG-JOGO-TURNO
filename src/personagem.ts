import type {habilidade} from './interface';

class Personagem{
    private health: number = 0;
    private inteligence : number = 0;
    private power : number = 0;
    private name: string ="";
    private birthcity: string ="";
    habilidade_atual:habilidade = {name:'', power:0,description:''};
    habilidades : habilidade[] = [];

    constructor(health:number,name:string,birthcity:string,habilidade:habilidade[],inteligence:number,power:number){
        this.health = health;
        this.name = name;
        this.birthcity = birthcity;
        this.habilidades = habilidade;
    }
    public setHealth(vida:number){this.health += vida;};
    public setName(nome:string){this.name = nome;};
    public setBirthcity(cidade:string){this.birthcity = cidade;};
    public setPower(power:number){this.power += power;}
    public setInteligence(inteligence:number){this.inteligence += inteligence;}
    public getHealth(){return this.health;}
    public getPower(){return this.power;}
    public getInteligence(){return this.inteligence;}
    public getName(){return this.name;}
    public getBirthcity(){return this.birthcity;}
    public setHabilidade(habilidade:habilidade){this.habilidades.push(habilidade);}
    public getHabilidades(){return this.habilidades;}
    public setHabilidadeAtual(habilidade:habilidade){this.habilidade_atual=habilidade;}
    public getHabilidadeAtual(){return this.habilidade_atual;}

}

export {Personagem};
