// ● Una variable array de números que contenga cinco elementos e imprima cada uno de sus elementos.
let numberArray:Array<number>=[10, 15, 64, 44, 53];

for(let i=0; i<numberArray.length; i++){
  console.log(numberArray[i]);
  
}

// ● Una variable array de strings que contenga cinco elementos e imprima cada uno de sus elementos.
let stringArray:Array<string>=['valores', 'de', 'array', 'de', 'strings'];

for(let i=0; i<stringArray.length; i++){
  console.log(stringArray[i]);
  
}

// ● Recorra cada array creado usando for-of e imprimiendo cada uno de sus elementos
const iterableArray:Array<any>=['valores', 'de', 'array', 'de', 'strings', 10, 15, 64, 44, 53];

for(const value of iterableArray){
  console.log(value);
  
}

// Investigue: cómo eliminar elementos de un array, agregar elementos, leer y actualizar elementos.
// Implemente ejemplos prácticos


//Array para las pruebas
let mutableArray:Array<any> =['valores', 'de', 'array', 'de', 'strings', 10, 15, 64, 44, 53, 'valores', 'de', 'array', 'de', 'strings', 10, 15, 64, 44, 53];

//log del array original
console.log(mutableArray);

//eliminar elemento del primer index del array


//eliminar elemento del ultimo index del array


//agregar elemento del primer index del array


//agregar elemento del ultimo index del array


//leer cada elemento de un array

//actualizar elementos de un array