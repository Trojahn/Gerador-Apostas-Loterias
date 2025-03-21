const { inicializarContador } = require('./functions');


test('inicializarContador com N = 5 deve retornar um objeto com chaves de 1 a 5 e valores 0', () => {
    expect(inicializarContador(5)).toEqual({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });
});

test('inicializarContador com N = 0 deve lançar um erro', () => {
    expect(() => inicializarContador(0)).toThrow("O valor de N deve ser um número inteiro positivo.");
});

test('inicializarContador com N negativo deve lançar um erro', () => {
    expect(() => inicializarContador(-3)).toThrow("O valor de N deve ser um número inteiro positivo.");
});

test('inicializarContador com N não inteiro deve lançar um erro', () => {
    expect(() => inicializarContador(4.5)).toThrow("O valor de N deve ser um número inteiro positivo.");
});