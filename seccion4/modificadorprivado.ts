class Animal {
  private nombre: string;
  private tamano: number;
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
