const lista = [
    100,
    200,
    500,
    40000000
];

const lista2 = [
    4,5,10,1,3,9
];



function ordenarArraySort(lista){
    return lista.sort((a,b) => a - b);
}

//Método hecho por mi
function ordenarArray2(array){

    let aux;
    let i2;
    for(let i=0; i<=array.length; i++){
        i2=0;
        for(let j=1; j<=array.length-1; j++){
            if(array[i2]>array[j]){
                aux = array[i2];
                array[i2] == array[j];
                array[j] == aux;
            }i2++;
        };
    };
}

//Este método es como el que hice pero mejor 
function ordenarArrayYutu(array){

    let aux;
    for(let i=0; i<array.length-1; i++){
        for(let j=0; j<array.length-1; j++){
            if(array[j]>array[j+1]){
                aux = array[j];
                array[j] == array[j+1];
                array[j+1] == aux;
            };
        };
    } 
}

 //Funciones de el maestro JuanDC
// const mitadLista = parseInt(lista.length/2);

// function esPar(numero){
//     if(numero % 2 === 0){
//         return true;
//     }else{
//         return false;
//     }
// }

// let mediana;
// if(esPar(lista.length)){
//     mediana = (lista[mitadLista-1]+lista[mitadLista])/2;
// }else{
//     mediana = lista[mitadLista];
// }


//Función hecha por mi
function calcularMediana(lista){

    ordenarArray2(lista);

    const mitadLista = Math.trunc(lista.length/2);
    let mediana;
    if (lista.length%2 != 0){
        mediana = lista[mitadLista];
    }else{
        mediana = (lista[mitadLista-1]+lista[mitadLista])/2;
    }

    return mediana;
}


//CONFIGURACIÓN BOTONES 
function calcularMedianaButton(){
    const input = document.getElementById("inputPromedio");
    const value = input.value;
    console.log(value);
}


