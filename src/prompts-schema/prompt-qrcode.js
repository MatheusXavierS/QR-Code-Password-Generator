import chalk from "chalk";

const promptQRCode = [
    //Eu tenho dois prompts, um para o link e outro para o tipo de QR Code
    //Eles irão ser exibidos um após o outro no terminal
    {
        name: "link",
        description: chalk.yellow.bold("Digite o link para gerar o QR Code"),
    },
    {
        name: "type",
        description: chalk.yellow.bold("Digite o tipo de QR Code (1 - Imagem, 2 - Terminal)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        required: true
    }
];

export default promptQRCode;