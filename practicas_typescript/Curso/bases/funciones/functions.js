"use strict";
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatiSignal = () => {
        return 'Batiseñal activida';
    };
    console.log(typeof activateBatiSignal());
    const heroName = returnName();
})();
