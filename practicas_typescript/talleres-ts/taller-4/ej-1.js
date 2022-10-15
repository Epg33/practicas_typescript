"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// ● Cree una función que reciba como argumento un número y retorne el cuadrado de éste cómo una
// promesa usando Async para ello. Luego, llame a la función y trate de imprimir su valor de retorno. ¿Cuál
// es el resultado de la impresión? ¿un valor numérico ? ¿una promesa ?
const square = (number) => __awaiter(void 0, void 0, void 0, function* () {
    const result = number ** 2;
    return result;
});
console.log(square(5));
// ● Cree una función llamada “resultado” que retorne una promesa usando “return new Promise”, de tal
// manera que la promesa en su bloque de instrucciones implemente setTimeout demorandose seis
// segundos para resolverse con valor 8. Luego, llame a la función e imprima su resultado, ¿qué resultado
// obtiene? ¿una promesa?, ¿ un entero ?
const resultado = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield new Promise((resolve, reject) => {
        setTimeout(() => {
            const operation = 2 * Math.sqrt(2 * 2);
            resolve(operation);
        }, 6000);
    }).then((res) => {
        console.log(res);
        return Number(res);
    });
});
console.log(resultado());
// ● Cree una función llamada “cuadradoAsincrono” que llame en su bloque de instrucciones a la función
// “resultado” de tal manera que la ejecución se detenga hasta obtener el valor retornado por “resultado”,
// luego, eleve tal valor al cuadrado y este sea impreso. Use Async - Await. ¿ Qué imprimió ? ¿una
// promesa?, ¿ un entero ?
const cuadradoAsincrono = () => __awaiter(void 0, void 0, void 0, function* () {
    const number = yield resultado();
    const formatting = Number(number);
    console.log(formatting);
    const result = formatting ** 2;
    return result;
});
console.log(cuadradoAsincrono());
// ● Responda:
// a) ¿Qué cláusula usamos para que una función retorne una promesa sin crearla explícitamente
// dentro de la función ?
// b) Si necesitamos capturar el valor de una promesa, ¿ qué cláusula usamos ?
// c) ¿Cuál es la condición para poder usar la cláusula await ?
