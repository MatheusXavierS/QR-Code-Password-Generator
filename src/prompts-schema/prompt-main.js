import chalk from "chalk";

const mainPrompt = {
    //name: select é o nome da variável que vai guardar a resposta do usuário
    name:"select",
    //Descrição que o usuário vai ver ao rodar o prompt
    description: chalk.yellow.bold("Escolha a ferramenta (1 - QR Code, 2 - Gerador de Senha)"),
    //partern so vai aceitar 1 ou 2, o / indica que é uma regex. E regex é uma forma de definir padrões de texto
    // O ^ indica o início do texto, o $ indica o fim do texto. Então só vai aceitar 1 ou 2 como resposta
    //se retirar o ^ e o $ ele aceitaria qualquer texto que contenha 1 ou 2, como 12, 21, 123,
    // o + indica que pode ter mais de um caractere
    pattern:/^[1-2]+$/,
    //mensagem de erro caso o usuário digite algo que não seja 1 ou 2
    message: chalk.red.italic("Escolha apenas entre 1 e 2"),
    //obrigatório o usuário digitar uma resposta
    required: true
}

export { mainPrompt };


// o package prompt é usado para criar prompts interativos no terminal
// ele permite definir perguntas, validar respostas e personalizar mensagens de erro