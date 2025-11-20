import { Personagem } from '../src/personagem';
import type { habilidade } from '../src/interface';

export interface jogavel {
    atacar(p: Personagem): void;
    fugir(): void;
    trocar_habilidade(habilidade: habilidade): void;
};
