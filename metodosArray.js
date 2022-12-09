const numeros = [1,2,3,4,5,6,7,8,9,10]
const alumnos = [
    {
        nombre : 'Cristian',
        nota : 6
    },
    {
        nombre : 'Rodrigo',
        nota : 7
    },
    {
        nombre : 'Pablo', 
        nota : 4
    },
    {
        nombre: 'Mateo',
        nota: 8
    }
]
const nombres = ['Nicolas','Lucre','Flor','Cami','Kevin']

const pasarAMayus = nombre => nombre.toUpperCase()

let nombresMayus = []
nombres.forEach( (nombre) => {
    nombresMayus.push( pasarAMayus( nombre ) ) 
})
// console.log( nombresMayus )


// map
const fnMap = (currentValue, index) => {
    return currentValue[ currentValue.length - 1  ]
}
const nuevoArray = nombres.map( fnMap )

// console.log( nuevoArray )


// [1,2,3,4,5,6,7,8,9,10] -> [2,4,6,8,10,12,14,16,18,20]

const numerosPorDos = numeros.map( numero =>  numero * 2 )

// console.log( numerosPorDos )



const aprobadosYDesaprobados = alumnos.map( alumno => {
    let aprobado;
    if( alumno.nota >= 7 ){
        aprobado = true
    }else{
        aprobado = false
    }
    return {
        nombre : alumno.nombre,
        nota : alumno.nota,
        aprobado : aprobado 
    }
} )


// console.log( aprobadosYDesaprobados )

let aprobados = 0

aprobadosYDesaprobados.forEach( alumno => {
    if(alumno.aprobado){
        aprobados++
    }
} )

// console.log( aprobados )


// filter

// console.log( aprobadosYDesaprobados )

const alumnosAprobados = aprobadosYDesaprobados.filter( alumno => alumno.aprobado )
const alumnosDesaprobados = aprobadosYDesaprobados.filter( alumno => !alumno.aprobado )
// console.log( alumnosAprobados )
// console.log( alumnosDesaprobados )
// console.log( numerosPorDos )

const numerosMayoresA10 = numerosPorDos.filter( numero => numero >= 10 )
const nombresConL = nombres.filter( nombre => nombre.toUpperCase().includes('L') )

// console.log( numerosMayoresA10 )
// console.log( nombresConL )

// find

const primerNombreQueTengaL = nombres.find( nombre => nombre.toUpperCase().includes('L') )
const primerAlumnoAprobado = alumnosAprobados.find( alumno => alumno.aprobado && alumno.nombre === "Mateo")
// console.log( primerNombreQueTengaL )
// console.log( primerAlumnoAprobado )

// tarea -> aprender a usar every && some en mdn  

// reduce

console.log( numeros )

function fnParaReduce( acumulador, valorActual ){
    return acumulador + valorActual
}

const sumaDeNumeros = numeros.reduce( fnParaReduce, 0 )

console.log( sumaDeNumeros )

console.log(  alumnos )

 
const stringNombresAlumnos = alumnos.reduce( ( acc, act, index, array ) => {
    if( index > 0 ){
        return acc + ' - '  + act.nombre
    }
    return acc + act.nombre
} , 'Alumnos: ' )

console.log( stringNombresAlumnos)
