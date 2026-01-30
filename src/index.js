import prompt from 'prompt';
import { mainPrompt } from './prompts-schema/prompt-main.js';
import creatteQRCode from './services/qr-code/create.js';
import createPassword from './services/password/create.js';

async function main() {
    prompt.get(mainPrompt, async (err, choose) => {
        if (err) console.log(chalk.red(err));
        if (choose.select =='1') await creatteQRCode();
        if (choose.select =='2') await createPassword();
    });

    prompt.start();
}

main();