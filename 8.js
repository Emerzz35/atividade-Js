// Passo 2: Qual é o seu nome?
const nome = "Gustavo";

// Passo 3: Uma função mágica
function getEventoAleatorio() {
    const numeroAleatorio = Math.floor(Math.random() * 3); // Gera um número entre 0 e 2

    if (numeroAleatorio === 0) {
        return "Maratona";
    } else if (numeroAleatorio === 1) {
        return "Triathlon";
    } else {
        return "Pentathlon";
    }
}

// Passo 4: Quantos dias para ficar pronto?
function getDiasTreino(eventoEscolhido) {
    if (eventoEscolhido === "Maratona") {
        return 50;
    } else if (eventoEscolhido === "Triathlon") {
        return 100;
    } else {
        return 200;
    }
}

// Passo 5: Compartilhe com o mundo
function logEvento(nome, evento) {
    console.log(`${nome} vai participar do evento: ${evento}`);
}

function logTempo(nome, dias) {
    console.log(`${nome} vai treinar por ${dias} dias.`);
}

// Passo 6: Vamos rodar!
const eventoEscolhido = getEventoAleatorio();
const diasTreino = getDiasTreino(eventoEscolhido);

logEvento(nome, eventoEscolhido);
logTempo(nome, diasTreino);
