function mostrar(a) {
    if (a === void 0) { a = "Jose"; }
    console.log(a);
}
var mostrar2 = function (a) {
    console.log(a);
};
var cartaPostre = function (postre) {
    var frutas = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        frutas[_i - 1] = arguments[_i];
    }
    console.log("El postre es ".concat(postre, " y tiene ").concat(frutas));
};
mostrar("Irwin");
mostrar2("Jose");
cartaPostre("postre1", "Manzana", "Pera", "Fresas");
