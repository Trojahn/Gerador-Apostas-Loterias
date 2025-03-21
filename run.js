const { inicializarContador, obterDados } = require('./functions');



async function main() {
    // Mega-sena
    let quantidades = inicializarContador(60);
    try {
        const dados = await obterDados("banana");
        console.log(dados);
    } catch(error) {
        console.log("Erro: ", error.message);
    }
}

main();