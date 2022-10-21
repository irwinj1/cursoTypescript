function mostrar(a: string = "Jose"): void {
  console.log(a);
}

const mostrar2 = (a: string): void => {
  console.log(a);
};

const cartaPostre = (postre: string, ...frutas: string[]) => {
  console.log(`El postre es ${postre} y tiene ${frutas}`);
};

mostrar("Irwin");
mostrar2("Jose");

cartaPostre("postre1", "Manzana", "Pera", "Fresas");
