let nome;
let xp;
let rank;
const prompt = require('prompt-sync')();

do {
    nome = prompt("Qual é o seu nome? ");
    xp = Number(prompt("Qual é a sua quantidade de Experiência? "));
} while (nome == null || xp == null);

do {
    switch (true) {
        case xp <= 1000:
            rank = "Ferro";
            break;
    
        case xp <= 2000:
            rank = "Bronze";
            break;
    
        case xp <= 5000:
            rank = "Prata";
            break;
    
        case xp <= 7000:
            rank = "Ouro";
            break;
    
        case xp <= 8000:
            rank = "Platina";
            break;
    
        case xp <= 9000:
            rank = "Ascendente";
            break;
    
        case xp <= 10000:
            rank = "Imortal";
            break;
    
        case xp > 10000:
            rank = "Radiante";
            break;
    }
} while (rank == null)

console.log(`O Herói de nome ${nome} está no nível de ${rank}`);
