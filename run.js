const { inicializarContador, obterDados, contabilizarOcorrencias } = require('./functions');



async function main() {
    // Mega-sena
    // TODO: Essa função é realmente necessária? (spoiler: não!). Remover em versão posterior.
    try {
        let quantidades = inicializarContador(60);
        const sorteios = await obterDados("megasena");
        quantidades = contabilizarOcorrencias(sorteios, quantidades);
    } catch (error) {
        console.log("Erro: ", error.message);
    }
}

main();