// ● Dos variables lógicas
let firstBool = true;
let secondBool = false;
// ● Dos variables numéricas
let firstNumber = 10;
let secondNumber = 20;
// ● Dos variables any
let anyValue = 'hello world';
let anotherValue = true;
// ● Dos variables string
let firstString = 'this is a string';
let secondString = 'another string';
// ● Cree una plantilla de strings para mostrar un mensaje de bienvenida al usuario luego de
// registrarse en nuestro sitio, por ejemplo. “Bienvenida Paula Pérez a nuestro sitio web, gracias por
// registrarte”. Este template debe usar dos variables, nombres y apellidos
function personName(firstName, lastName) {
    const fullName = `Bienvenido/a ${firstName} ${lastName} a nuestro sitio web, gracias por
  registrarte`;
    return fullName;
}
console.log(personName('Alex', 'Lopez'));
