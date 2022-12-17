(()=>{
  abstract class Mutante {
    constructor(
      public name: string,
      public realName: string
    ){}
  }

  class Xmen extends Mutante {
    salvarMundo(){
      return 'Mundo a salvo'
    }
  }
  class Villian extends Mutante {
    consquistarMundo() {
      return 'Mundo conquistado'
    }
  }

  const wolverine: Xmen = new Xmen('Wolverine', 'Logan');
  const Magneto: Villian = new Villian('Magneto', 'Magnus');

  // console.log(wolverine.salvarMundo())
  // console.log(Magneto.consquistarMundo())
  const printName = (character: Mutante):void => {
    // console.log(character.realName)
  }

  printName(wolverine)
})()