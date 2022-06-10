const lista = [
    100,
    200,
    500,
    40000000
];


//Función hecha por mi
function calcularMediana(lista){

    const mitadLista = Math.trunc(lista.length/2);
    let mediana;
    if (lista.length%2 != 0){
        mediana = lista[mitadLista];
    }else{
        mediana = (lista[mitadLista-1]+lista[mitadLista])/2;
    }

    return mediana;
}

