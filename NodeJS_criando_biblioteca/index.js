const chalk = require('chalk');
const fs = require('fs');

function trataErro(erro) {
    throw new Error(chalk.red.bold.underline(erro.code, 'Não há arquivo no caminho!'));
}

async function pegaArquivo(caminhoArquivo) {
    const encoding = 'utf-8'
    try {
        const text = await fs.promises.readFile(caminhoArquivo, encoding)
        console.log(chalk.green(text));
    } catch(erro) {
        trataErro(erro);
    } finally {
        console.log(chalk.yellow.bold.underline('Operação Concluída!'));
    }
}

pegaArquivo('./arquivos/texto1.md');