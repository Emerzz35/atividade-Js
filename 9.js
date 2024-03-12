const hobbies = ['Jogar', 'tocar guitarra', 'ler'];
console.log(hobbies);
console.log(hobbies[0]);
console.log(hobbies[1]);
console.log(hobbies[2]);
hobbies[1] = 'ler';
console.log(hobbies);
console.log(hobbies.length);
hobbies.push('cozinhar');
console.log(hobbies);
hobbies.pop()
console.log(hobbies);
let posicao = hobbies.indexOf('ler');
hobbies.splice(posicao, 1);
console.log(hobbies);

const hobbiesDaAmiga = ['jogar','ouvir musica','cantar'];
const todosOsHobbies = hobbies.concat(hobbiesDaAmiga);
console.log(todosOsHobbies);

const hobbiesMusicais = ['ouvir música','tocar guitarra','cantar'];
const hobbiesCriativos = ['Jogar','cozinhar'];

const categoriaDeHobbies = [hobbiesMusicais, hobbiesCriativos];
console.log(categoriasDeHobbies[0]);
console.log(categoriasDeHobbies[0][0]);
console.log(categoriasDeHobbies[0][2]);