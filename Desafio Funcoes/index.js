let vitorias;
let derrotas;
const prompt = require('prompt-sync')();

do {
    vitorias = Number(prompt("Quantas vitórias? "));
    derrotas = Number(prompt("Quantas derrotas? "));
} while (vitorias == null || derrotas == null);

console.log(qualRank(vitorias, derrotas));

function qualRank(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    switch (true) {
        case saldoVitorias <= 10:
            nivel = "Ferro";
            break;

        case saldoVitorias <= 20:
            nivel = "Bronze";
            break;

        case saldoVitorias <= 50:
            nivel = "Prata";
            break;

        case saldoVitorias <= 80:
            nivel = "Ouro";
            break;

        case saldoVitorias <= 90:
            nivel = "Diamante";
            break;

        case saldoVitorias <= 100:
            nivel = "Lendário";
            break;

        case saldoVitorias > 100:
            nivel = "Imortal";
            break;
    }

    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}