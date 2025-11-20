import {Humano} from '../classes/friendlyclasses';
import {Mago,Tanque} from '../classes/enemyclasses';
import {habilidade} from '../interface';
import promptsync from 'prompt-sync';

let player= new Humano(100,'Gabriel','Volta Redonda',[],2,8);
let inimigoA = new Mago(100,100,'Patolino O Mago','Mogi das Cruzes',[],2,10);
let inimigoB = new Tanque(5,100,'Malphite : A Pedra','Acre',[],2,10);

/* Fazer um menu para startar a run e o jogador preencher os campos do player */
/* Após isso ele deve combater os dois inimigos para zerar o jogo */
/* Preciso pensar na lógica de fugir() */
const prompt = promptsync();
let escolha: string | null = "2";
while(escolha!="1"){
    escolha = prompt("Digite 1 para startar uma Run: ");
}
let nome = prompt("Escolha seu nome,jogador: ");
let birthcity = prompt('Digite o nome da sua cidade: ');
console.log("Agora, você irá entrar no jogo e enfrentrar inimigos poderosos...");

/*Enquanto o player estiver vida, ele vai fightar o inimigo A, se matar o A, vai pro B
Ele pode fugir também
*/

while(player.getHealth()>0){

    let opcao = prompt("Você deseja ver os stats seu e do inimigo?");
    



}