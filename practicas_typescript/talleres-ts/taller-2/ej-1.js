"use strict";
// ● Cree una función con un paraḿetro opcional tipo boolean, uno por defecto tipo string, y uno obligatorio de
// tipo number. Haga el llamado a la función.
const params = (count, thing = 'producto', exist) => {
    if (exist) {
        return `el producto ${thing} tiene ${count} en existencia`;
    }
    return `hay ${count} del producto ${thing}`;
};
console.log(params(15, 'cama', true));
// ● Cree una variable tipo función que tenga como parámetros dos números y retorne su suma, haga el
// llamado a la función.
const suma = function (num1, num2) {
    return num1 + num2;
};
console.log(suma(5, 5));
// ● Use setTimeOut para implementar un callback que se llame a los 5 segundos e imprima por consola el
// mensaje “HOLA ADSI”
const saludar = (ficha) => {
    return `HOLA ADSI ${ficha}`;
};
setTimeout(saludar(2448515), 5000);
// ● Cree una función flecha sin argumentos que imprima “Hola ADSI”.
// ● Cree una función flecha que tenga como parámetro edad y retorne un string que le diga al usuario cuál
// fue la edad pasada como argumento, imprima el valor devuelto por la función. Use paréntesis para el
// parámetro y omita la palabra reservada return.
// ● Cree una función flecha que tenga como parámetros dos números y retorne el producto de éstos,
// imprima el valor devuelto por la función. Use paréntesis para agrupar los parámetros, no use la palabra
// reservada return.
// ● Cree una función flecha que tenga como parámetros dos números y retorne el módulo de éstos, imprima
// el valor devuelto por la función. La función debe tener dos instrucciones, una donde se declare e inicialice
// la variable módulo que contendrá el módulo de los dos números y la otra donde se retorne la variable
// módulo. Use paréntesis para agrupar los parámetros, use llaves para agrupar las dos instrucciones.
