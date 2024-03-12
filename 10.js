var lugaresQueVisitei = ["Japão","Argentina","Europa","Canada"];
var lugaresAmiguinho = ["China","Japão","Singapura","Chile","Canada"];
var lugaresEmComum = [];

for (let i=0; i< lugaresQueVisitei.length; i++){
    for (let j=0; j<lugaresAmiguinho.length; j++){
        if (lugaresQueVisitei[i]===lugaresAmiguinho[j]){
            lugaresEmComum.push(lugaresQueVisitei[i]);
        }
    }
}
//console.log(lugaresEmComum);

// 3: Amigos do Face

let amigosDoFace = ["Davi","Vitor","Ana Clara","Caue","Vinicius","Lorena"];
let amigosDoFaceDoKaian = ["Ana Helena","Lorena","Vitoria","Emily","Vitor"];
let amigosEmComum = [];

for(let a=0; a<amigosDoFace.length; a++){
    for(let k=0; k<amigosDoFaceDoKaian.length; k++){
        if(amigosDoFace[a]===amigosDoFaceDoKaian[k]){
            amigosEmComum.push(amigosDoFace[a])
        }
    }
}
//console.log(amigosEmComum);

// 4:Jogo de adivinhação

var numeroSecreto = 16;
var tentativas = 0;

for (let r = 0; r < 10; r++) {
    let palpiteAtual = prompt("Digite um número:");
    
    if (palpiteAtual == numeroSecreto) {
        console.log("Você Venceu!");
        break;
    } else {
        tentativas++;

        if (tentativas > 5) {
            console.log("Você perdeu");
            break;
        }
    }
}
