class Animal {
  public nombre: string;
  public tamano: number;
  constructor(_nombre: string, _tamano: number) {
    this.nombre = _nombre;
    this.tamano = _tamano;
  }
  public moverse(): void {
    console.log("Me estoy moviendo");
  }
}

const animal = new Animal("Serpiente", 2);

console.log(animal);
