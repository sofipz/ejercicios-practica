function Cuenta (numeroDeCuenta, saldo, titular){
    this.numeroDeCuenta = numeroDeCuenta,
    this.saldo = saldo,
    this.titulas =titular
    this.deposito = function(cantidadDeDinero){
        this.saldo = this.saldo + cantidadDeDinero
        console.log('Usted acaba de recibir un depósito de $' + cantidadDeDinero + ', su nuevo saldo es de $' + this.saldo)
    }
    this.extraccion = function(dineroAExtraer){
        if(dineroAExtraer > this.saldo){
            console.log('Fondos Insuficientes')
        }else{
            this.saldo = this.saldo - dineroAExtraer
            console.log('Usted ha realizado una extracción de $' + dineroAExtraer + '. Su nuevo saldo es de $' + this.saldo)
        }
    }
}

let cuenta1 = new Cuenta(1568763344109, 1000, 'Sofia Perez Zavala');

// console.log(cuenta1);
cuenta1.deposito(1000);
cuenta1.extraccion(500);
console.log(cuenta1.saldo);
cuenta1.extraccion(3000);


// Siguiente ejercicio

function Alumno(nombre, numeroDeLegajo, listaDeNotas){
    this.nombre = nombre,
    this.numeroDeLegajo = numeroDeLegajo,
    this.listaDeNotas = listaDeNotas,
    this.promedio = function(){
        sumaNotas = 0
        for(let i = 0; i < this.listaDeNotas.length; i++){
            sumaNotas = sumaNotas + this.listaDeNotas[i]
        }
        return sumaNotas/this.listaDeNotas.length
    }
    this.aprobado = function(notaDeAprobacion){
        if(notaDeAprobacion > this.promedio()){
            console.log('Recursas la materia')
        }else{
            console.log('Aprobaste')
        }
    }
}

let alumno1 = new Alumno('Mel', 45, [8, 8]);
console.log(alumno1.promedio());
alumno1.aprobado(9);


