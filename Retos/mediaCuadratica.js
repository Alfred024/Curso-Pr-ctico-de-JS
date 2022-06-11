const calificaciones = [
    4,5,6,10,12,15
]

function calcularMediaCuadratica(array){

    let suma=0;
    for(i of array){
        suma+= i*i;
    }
    suma=suma/array.length;

    let resultado = Math.sqrt(suma);
    return resultado;

}