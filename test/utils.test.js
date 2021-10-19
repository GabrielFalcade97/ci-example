const { gerarNumeroAleatorio, acharCaracter } = require('../lib/utils');

describe('Utils', () => {
    describe('gerarNumeroAleatorio', () => {
        test('fim nao pode ser negativo', () => {
            expect(gerarNumeroAleatorio(20, -5))
                .toBe(-1);
        });

        test('inicio tem que ser numero inteiro', () =>{
            expect(gerarNumeroAleatorio(2.6,7))
            .toBe(-1);
        });

        test('fim tem que ser um numero inteiro',()=>{
            expect(gerarNumeroAleatorio(50,"notInteger"))
            .toBe(-1);
        });

        test('inicio não deve ser negativo',()=>{
            expect(gerarNumeroAleatorio(-9,8))
            .toBe(-1);
        });
    });
    

    describe('acharCaracter', () => {
        test('comprimento invalido', () => {
            expect(acharCaracter(-4, 'abcde', 'c'))
            .toBe('comprimento invalido');
        });
        test('Espera retornar indice cujo caracter foi encontrado',()=>{
            expect(acharCaracter(3,'abc','b'))
            .toBe(1);
        })
        test('Espera apresentar mensagem informando que caracter não é presente na cadeira',()=>{
        expect(acharCaracter(5,'qwert','a'))
        .toBe("caracter não encontrado");
        });
    });    
});