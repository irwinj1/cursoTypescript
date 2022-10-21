class Padre {
  nombre: string;
  edad: number;
  constructor(_nombre: string, _edad: number) {
    this.nombre = _nombre;
    this.edad = _edad;
  }
  mostrarNombre() {
    console.log(this.nombre);
  }
}

class Hijo extends Padre {
  apellido: string;
  constructor(_nombre: string, _edad: number, _apellido: string) {
    super(_nombre, _edad);
    this.apellido = _apellido;
  }
}

const hijo = new Hijo("Irwin", 33, "Guardado");

console.log(hijo);
