(() => {
  class Avenger {
    name;
    power;

    constructor(name = "No name", power = 0) {
      this.name = name;
      this.power = power;
    }
  }

  class FlyingAvenger extends Avenger {
    flying;

    constructor(name, power) {
      super(name, power);
      this.flying = true;
    }
  }

  const Hulk = new Avenger("Hulk", 9001);
  const falcon = new FlyingAvenger("Falcon", 50, );

  console.log(Hulk);
  console.log(falcon);
})();
