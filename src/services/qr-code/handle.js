import qr from "qrcode-terminal"
import chalk from "chalk";

async function  handle(err, result) {
    if (err) {
        console.error("Erro ao obter os dados:", err);
        return;
    }

    // Verifica se o tipo é pequeno (2) ou grande (1) e gera o QR Code de acordo
    // 2 é para terminal 1 para imagem
    const isSmall = result.type == 2
    qr.generate(result.link, { small: isSmall }, (qrcode) => {
    console.log(chalk.green("QR Code gerado com sucesso: \n"));
    console.log(qrcode);
    })
}

export default handle;