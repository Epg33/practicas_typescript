(() => {
  class Avenger {
    constructor(
      public name: string, 
      public realName: string
      ) {
      // console.log("Constructor avenger llamado");
    }

    protected getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(
      name: string,
      realName: string,
      public isMutant: boolean
      ){
      super(name, realName);
      // console.log('Constructor Xmen Llamado')
    }

    get fullName() {
      return `${this.name} - ${this.realName}`
    }

    set fullName(name:string){
      if ( name.length < 3){
        throw new Error('el nombre debe ser mayor a tres caracteres')
      }
      this.name = name
    }

    getFullNameFromXmen(){
      // console.log(super.getFullName())
    }
  }

  const wolverine = new Xmen("Wolverine", "Logan", true);

  // console.log(wolverine.fullName);

  // wolverine.fullName = 'Ethiem'
  // wolverine.getFullNameFromXmen()
})();
