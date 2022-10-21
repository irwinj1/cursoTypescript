class Vehiculo {
  marca: string;
  fecha: string;
  puertas: number;

  constructor(marca_: string, fecha_: string, puertas_: number) {
    this.marca = marca_;
    this.fecha = fecha_;
    this.puertas = puertas_;
  }
  acelerara(): void {
    console.log("Ojo que acelero");
  }
  frenar(): void {
    console.log("Ojo que freno");
  }
}

const coche = new Vehiculo("Ford", "12/7/2022", 4);

console.log(coche);
coche.acelerara();
coche.frenar();
