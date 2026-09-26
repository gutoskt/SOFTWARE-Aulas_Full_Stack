import { applyMixins } from './mixin/applyMixin';

class Automovel{

  ligar(): void {
    console.log("AUTOMOVEL LIGADO COM SUCESSO!")
  }

  desligar(): void {
    console.log("DESLIGANDO AUTOMOVEL")
  }

}

class Especificacao{
  descricao: string;

  constructor(descricao: string){
    this.descricao = descricao;
  }

}


class Carro{
  nome: string;

  constructor(nome: string){
    this.nome = nome;
  }

}

// Interface para indicar que Carro deve implementar os mixins Automovel e Especificacao

interface Carro extends Automovel, Especificacao{ }

applyMixins(Carro, [Automovel, Especificacao]) // Aplica os mixins Automovel e Especificacao à classe Carro, o que mixin permite que Carro utilize os métodos e propriedades dessas classes.

const gol = new Carro("Gol 1.6");

gol.ligar();

gol.descricao = "Modelo completo, automatico";

console.log(gol);

gol.desligar();