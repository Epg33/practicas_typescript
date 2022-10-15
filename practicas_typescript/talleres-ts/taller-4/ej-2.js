"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _coche_año;
// ● Cree e instancie una clase coche con un método no estático y otro estático, dos propiedades, una pública
// y una privada, ambas deben ser pasadas al constructor.
class coche {
    constructor(modelo, año) {
        _coche_año.set(this, void 0);
        this.modelo = modelo;
        __classPrivateFieldSet(this, _coche_año, año, "f");
    }
    speed() {
        console.log('la velocidad es 420km/h');
    }
    descripcion() {
        const fecha = new Date();
        const salida = fecha.getFullYear() - __classPrivateFieldGet(this, _coche_año, "f");
        console.log(`El ${this.modelo} salio en el año ${__classPrivateFieldGet(this, _coche_año, "f")} y tiene ${salida} de antiguedad`);
    }
}
_coche_año = new WeakMap();
const honda = new coche('honda civic', 2000);
honda.speed();
honda.descripcion();
// ● Cree e instancie una clase robot con dos métodos no estáticos y dos estáticos, cuatro propiedades, dos
// públicas y dos privadas, dos deben ser pasadas al constructor, las otras dos, deben ser inicializadas
// dentro de la clase.
// ● Cree e instancie una clase PC con dos métodos no estáticos y dos estáticos, cuatro propiedades, dos
// públicas y dos privadas, todas deben ser pasadas al constructor.
