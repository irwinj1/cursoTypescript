var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca_, fecha_, puertas_) {
        this.marca = marca_;
        this.fecha = fecha_;
        this.puertas = puertas_;
    }
    Vehiculo.prototype.acelerara = function () {
        console.log("Ojo que acelero");
    };
    Vehiculo.prototype.frenar = function () {
        console.log("Ojo que freno");
    };
    return Vehiculo;
}());
var coche = new Vehiculo("Ford", "12/7/2022", 4);
console.log(coche);
coche.acelerara();
coche.frenar();
