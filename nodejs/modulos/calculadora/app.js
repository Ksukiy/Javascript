//const funcoesMatematicas = require('./funcoes_matematicas');
//const calculadoraIdade = require('./calculadora_idade');
import * as funcoesMatematicas from './funcoes_matematicas.js';
import * as calculadoraIdade from './calculadora_idade.js';

console.log("Soma: " + funcoesMatematicas.soma(5, 3));
console.log("Subtração: " + funcoesMatematicas.subtrai(5, 3));
console.log("Multiplicação: " + funcoesMatematicas.multiplica(5, 3));
console.log("Divisão: " + funcoesMatematicas.divide(6, 2));

console.log(calculadoraIdade.idade('Daniel', 2008, 2050));