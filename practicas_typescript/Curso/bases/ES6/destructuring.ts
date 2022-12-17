(() => {

  type Avengers = {
      nick: string;
      ironMan: string;
      vision: string;
      activo: boolean;
      poder: number;
  }

  const avengers:Avengers = {
    nick: "Samuel L. Jackson",
    ironMan: "Robert Downey Jr.",
    vision: "Paul Bettany",
    activo: true,
    poder: 1500.123154654,
  };

  // const {poder, vision} = avengers;
  // console.log( poder.toFixed(2),  vision.toUpperCase() );
  
  const printAvenger = ({ironMan, ...rest}:Avengers) => {
    console.log(ironMan, rest);
  }

  // printAvenger(avengers);

  const avengerArr:any[] = ['Cap. America', true, 150.15];

  const [ capi, ironMan, ] = avengerArr;
  console.log({ironMan, capi})

})();
