//1)
let alumno1 = {
    nombre: 'María',
    cantidadDeFaltas: 5,
    notas: [5, 8, 7, 9, 10],
    calcularPromedio: function(){
        let sumaNotas = 0
        for(let i = 0; i<this.notas.length; i++){
            sumaNotas = sumaNotas + this.notas[i]
        }
    return sumaNotas/this.notas.length
    }
}

function Alumno(nombre, cantidadDeFaltas, notas){
    this.nombre = nombre,
    this.cantidadDeFaltas = cantidadDeFaltas,
    this.notas = notas,
    this.calcularPromedio = function(){
        let sumaNotas = 0
        for(let i = 0; i<this.notas.length; i++){
        sumaNotas = sumaNotas + this.notas[i]
        }
        return sumaNotas/this.notas.length
        }
}


let alumno2 = new Alumno('Sofía', 1, [6, 9, 8, 9, 7]);
let alumno3 = new Alumno('Faru', 3, [1, 4, 2, 8, 7]);
let alumno4 = new Alumno('Melania', 0, [6, 5, 8, 6, 7]);
let alumno5 = new Alumno('Mila', 6, [6, 10, 3, 5, 7]);

const alumnos = [alumno2, alumno3, alumno4, alumno5];

// console.log(alumno2);
// console.log(alumno3);
// console.log(alumno4);
// console.log(alumno5);

let curso = {
    nombreDeCurso: 'Los pelotudos',
    notaDeAprobacion: 7,
    faltasMaximas: 5,
    listaDeEstudiantes: [alumno2.nombre, alumno3.nombre, alumno4.nombre, alumno5.nombre],
    agregarAlumno: function(nombre, cantidadDeFaltas, notas){
        alumnos.push(new Alumno(nombre, cantidadDeFaltas, notas))
        this.listaDeEstudiantes.push(nombre)
    },
    aproboDesaprobo: function(array){
        let booleanos = []
        for(let i = 0; i < array.length; i++){
            if(array[i].calcularPromedio()>=this.notaDeAprobacion && array[i].cantidadDeFaltas<this.faltasMaximas){
                console.log(true + ': Significa que aprobaste')
                booleanos.push(true)
            }else if(array[i].cantidadDeFaltas >= this.faltasMaximas && array[i].calcularPromedio()>=7.7){
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
curso.agregarAlumno('Jose', 2, [7, 7, 9, 5, 9]);

// console.log(curso.listaDeEstudiantes);
// console.log(alumnos);
console.log(curso);

curso.aproboDesaprobo(alumnos);
// console.log(booleanos)