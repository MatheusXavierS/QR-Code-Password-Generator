import permitedCharacters from "./permited-characters.js";

async function handle() {
  let character = [];
  let password = "";
  const passwordLength = process.env.PASSWORD_LENGTH;
  character = await permitedCharacters();

  for (let i = 0; i < passwordLength; i++) {
    // math floor serve para arredondar para baixo
    //no caso estou arredondando o math random que gera um numero aleatorio entre 0 e 1 e multiplicando pelo tamanho do array character
    //no caso estou multiplicando pelo tamanho do array character para garantir que o numero aleatorio esteja dentro do tamanho do array character
    let index = Math.floor(Math.random() * character.length);
    password += character[index]; //adiciona o caractere na variavel password a cada iteração
  }
  
    return password;
}

export default handle;
