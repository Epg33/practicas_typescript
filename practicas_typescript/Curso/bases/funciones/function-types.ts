(() => {
  const addNumbers = (a: number, b: number): number => a + b;
  const greet = (name: string): string => `Hola ${name}`;
  const saveTheWorld = () => "El mundo esta salvado";

  let myFunction: ()=> string;

  // myFunction = 10;
  // console.log(myFunction);

  // myFunction = addNumbers;
  // console.log( myFunction(1, 2))

  // myFunction = greet;
  // console.log( myFunction('Ethiem'))

  myFunction = saveTheWorld;
  console.log( myFunction())
})();
