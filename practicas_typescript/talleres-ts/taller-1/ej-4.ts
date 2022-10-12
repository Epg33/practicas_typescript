// ● Una variable tipo objeto cuyos valores sean los días de la semana
const weekDays:object ={
  firstDay: 'lunes',
  secondDay: 'martes',
  thirdDay: 'miercoles',
  forthDay: 'jueves',
  fifthDay: 'viernes',
  sixthDay: 'sabado',
  seventhDay: 'domingo'
}

// ● Una variable tipo objeto cuyos valores sean los números del 0 al 9
const numbers:object={
  0:0,
  1:1,
  2:2,
  3:3,
  4:4,
  5:5,
  6:6,
  7:7,
  8:8,
  9:9
}

// ● Recorra cada objeto creado usando for-in e imprimiendo cada uno de sus valores
for (const day in weekDays){
  console.log(day);
}

for(const number in numbers){
  console.log(number);
  
}

// Investigue: cómo eliminar elementos clave-valor de un objeto, cómo leer y actualizar valores. Implemente
// ejemplos prácticos.
// Investigue: Ciclos for y while en TypeScript. Implemente ejemplos prácticos