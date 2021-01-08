export class MyCard {
    
    private myNombre: string;
    private myRut: string;
    
    constructor(nombre:string, rut:string) {
        this.myNombre = nombre;
        this.myRut = rut;
    }
    getNombre() {
        return this.myNombre;
    }
    getRut() {
        return this.myRut;
    }

  }