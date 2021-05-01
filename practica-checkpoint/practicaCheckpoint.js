function Alumno(nombre, cantidadDeFaltas, notas){
    this.nombre = nombre,                           //string
    this.cantidadDeFaltas = cantidadDeFaltas,       //number
    this.notas = notas,                             //Object
    this.calcularPromedio = function(){             //function
        let sumaNotas = 0
        for(let i = 0; i<this.notas.length; i++){
        sumaNotas = sumaNotas + this.notas[i]
        }
        return sumaNotas/this.notas.length
        }
}

module.exports = {Alumno};







