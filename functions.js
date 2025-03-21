
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

module.exports = {inicializarContador};
