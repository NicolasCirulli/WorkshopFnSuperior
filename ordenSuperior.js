// function calculadora(fn, numero1, numero2) {
//     return fn(numero1, numero2 )
// }

// function resta(valor1, valor2) {
//     return valor1 - valor2
// }

// let suma = (valor1, valor2) => valor1 + valor2


// console.log(calculadora(suma, 15, 10))

// console.log(calculadora(resta, 20, 5,'hola'))

// console.log( calculadora(function (valor1, valor2) {
//             return valor1 * valor2
//         },10,3) )

// console.log( calculadora( (valor1, valor2) => valor1 / valor2, 20, 5 ) )

function recorrerLista( lista, funcionQueLLega ){
    let aux = [ ]
    for( let elementoActualDeLaLista of lista){
        aux.push( funcionQueLLega( elementoActualDeLaLista ) )
    }
    return aux
}

//  const pasarAMayus = nombre => nombre.toUpperCase()
//  const pasarAMinus = nombre => nombre.toLowerCase()



// let mentores = ['NiCoLas', 'LuCrE']

// const arrayModificadoMayus = recorrerLista( mentores, pasarAMayus )
// const arrayModificado = recorrerLista( mentores, pasarAMinus )
// console.log( arrayModificadoMayus )
// console.log( arrayModificado )



