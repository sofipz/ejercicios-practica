const {Alumno} = require('./practicaCheckpoint')
const {alumnos} = require('./data')

let curso = {
    nombreDeCurso: 'Los pelotudos',
    notaDeAprobacion: 7,
    faltasMaximas: 5,
    listaDeEstudiantes: alumnos,
    agregarAlumno: function(nombre, cantidadDeFaltas, notas){
        alumnos.push(new Alumno(nombre, cantidadDeFaltas, notas))
    },
    aproboDesaprobo: function(){
        let booleanos = []
        for(let i = 0; i < this.listaDeEstudiantes.length; i++){
            if(this.listaDeEstudiantes[i].calcularPromedio()>=this.notaDeAprobacion && this.listaDeEstudiantes[i].cantidadDeFaltas<this.faltasMaximas){
                // console.log(true + ': Significa que aprobaste')
                booleanos.push(true)
            }else if(this.listaDeEstudiantes[i].cantidadDeFaltas >= this.faltasMaximas && this.listaDeEstudiantes[i].calcularPromedio()>=this.notaDeAprobacion*1.7){
                // console.log(true + ': Significa que aprobaste')
                booleanos.push(true)
            }else{
                // console.log(false + ': Lo lamento, reprobaste')
                booleanos.push(false)
            }
        }
        console.log(booleanos)
    }
}

// console.log(curso);
curso.agregarAlumno('Agustina', 3, [7, 7, 9, 5, 9]);


console.log(curso.listaDeEstudiantes);
// console.log(alumnos);
// console.log(curso);

// curso.aproboDesaprobo();
// console.log(booleanos)
// console.log(curso.listaDeEstudiantes);
// curso.agregarAlumno('Jose', 2, [7, 7, 9, 5, 9]);
// console.log(curso.listaDeEstudiantes);
curso.aproboDesaprobo();