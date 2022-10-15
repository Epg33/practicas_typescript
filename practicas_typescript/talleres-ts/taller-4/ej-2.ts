// ● Cree e instancie una clase coche con un método no estático y otro estático, dos propiedades, una pública
// y una privada, ambas deben ser pasadas al constructor.
class coche{
    modelo:string;
    #año:number;
    speed(){
        console.log('la velocidad es 420km/h');
    }
    descripcion(){
        const fecha = new Date();
        const salida:number = fecha.getFullYear()-this.#año
        console.log(`El ${this.modelo} salio en el año ${this.#año} y tiene ${salida} años de antiguedad`);
    }
    constructor(modelo:string, año:number){
        this.modelo=modelo;
        this.#año=año;
    }
}

const honda = new coche('honda civic', 2000);
honda.speed();
honda.descripcion();

// ● Cree e instancie una clase robot con dos métodos no estáticos y dos estáticos, cuatro propiedades, dos
// públicas y dos privadas, dos deben ser pasadas al constructor, las otras dos, deben ser inicializadas
// dentro de la clase.
// ● Cree e instancie una clase PC con dos métodos no estáticos y dos estáticos, cuatro propiedades, dos
// públicas y dos privadas, todas deben ser pasadas al constructor.