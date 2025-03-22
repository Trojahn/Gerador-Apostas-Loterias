
// Função utilizada para criar a listagem usada para contar o número de ocorrências de cada número
function inicializarContador(n) {
    if (n <= 0 || !Number.isInteger(n)) {
        throw new Error("O valor de N deve ser um número inteiro positivo.");
    }

    const objeto = {};
    for (let i = 1; i <= n; i++) {
        objeto[i] = 0;
    }
    return objeto;
}


async function obterDados(loteria) {
    try {
        const response = await fetch(`https://loteriascaixa-api.herokuapp.com/api/${loteria}`);
        if (response.status >= 400 && response.status < 500) {
            throw new Error("Not found");
        }
        if (!response.ok) {
            throw new Error("Erro");
        }
        const json = await response.json();
        return json;
    } catch (error) {
        throw error;
    }
}

function contabilizarOcorrencias(sorteios, contador) {
    for (let sorteio of sorteios) {
        if (!sorteio["dezenas"]) {
            throw new Error("nao existem as dezenas");
        }
        for (let dezena of sorteio.dezenas) {
            contador[parseInt(dezena)] = contador[parseInt(dezena)] + 1;
        }
    }
    return contador;

}


module.exports = { inicializarContador, obterDados, contabilizarOcorrencias };
