class classeHeroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let tipoAtaque;

        switch (true) {
            case this.tipo == "Mago":
                tipoAtaque = "Magia";
                break;
        
            case this.tipo == "Guerreiro":
                tipoAtaque = "Espada";
                break;

            case this.tipo == "Monge":
                tipoAtaque = "Artes Marciais";
                break;

            case this.tipo == "Ninja":
                tipoAtaque = "Shuriken";
                break;
        }

        console.log(`O ${this.tipo} atacou usando ${tipoAtaque}`);
    }
}

let ninja = {
    nome: "None",
    idade: 17,
    classe: "Ninja"
}

let mago = {
    nome: "Mam",
    idade: 13,
    classe: "Mago"
}

let heroi = new classeHeroi(ninja.nome, ninja.idade, ninja.classe);
heroi.atacar();

let heroi2 = new classeHeroi(mago.nome, mago.idade, mago.classe);
heroi2.atacar();