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
var _coche_año, _robot_marca, _robot_color;
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
        console.log(`El ${this.modelo} salio en el año ${__classPrivateFieldGet(this, _coche_año, "f")} y tiene ${salida} años de antiguedad`);
    }
}
_coche_año = new WeakMap();
const honda = new coche('honda civic', 2000);
honda.speed();
honda.descripcion();
class robot {
    constructor(capacidad, activo) {
        _robot_marca.set(this, 'Motoman');
        _robot_color.set(this, 'azul');
        this.capacidad = capacidad;
        this.activo = activo;
    }
    aviableColors() {
        console.log(`el modelo esta disponible en azul o gris`);
    }
    sayBrand() {
        console.log(`la marca de este robot es ${__classPrivateFieldGet(this, _robot_marca, "f")}`);
    }
    sayCapacity() {
        console.log(`este robot puede mover ${this.capacidad} kilos de carga`);
    }
    sayIfActive() {
        this.activo
            ? console.log('Este robot esta activo y trabajando')
            : console.log('Este robot esta inactivo');
    }
}
_robot_marca = new WeakMap(), _robot_color = new WeakMap();
const roboto = new robot(120, true);
roboto.aviableColors();
roboto.sayBrand();
roboto.sayCapacity();
roboto.sayIfActive();
// ● Cree e instancie una clase PC con dos métodos no estáticos y dos estáticos, cuatro propiedades, dos
// públicas y dos privadas, todas deben ser pasadas al constructor.
