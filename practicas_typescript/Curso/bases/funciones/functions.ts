(()=>{
  const hero:string ='Flash';

  function returnName ():string {
    return hero;
  }

  const activateBatiSignal = ():string => {
    return 'Batiseñal activida';
  }

  console.log(typeof activateBatiSignal());

  const heroName = returnName();
})()