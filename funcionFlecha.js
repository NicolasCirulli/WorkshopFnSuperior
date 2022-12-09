// funciones para una calculadora


// suma

function sumar(numero1, numero2){
    return numero1 + numero2
}

const suma = (numero1, numero2) => {
    return numero1 + numero2
}


// resta

function restar(numero1, numero2){
    return numero1 - numero2
}

const resta = (numero1, numero2) =>  numero1 - numero2 

// console.log( restar(10,5) )
// console.log( resta(10,5) )

// multiplicar

function multriplicarPorDos(numero){
    return numero * 2
}

const porDos = (numero) => numero * 2


// console.log( porDos( 10 ) )

// dividir

function dividir(numero1, numero2){
    if( numero1 > numero2 ){
        return numero1 / numero2
    }
    return 'error'
    
}


console.log( dividir( 25, 20 ) )

const dividirDos = (numero1, numero2) => {
    if( numero1 > numero2 ){
        return numero1 / numero2
    }
    return 'error'
}











