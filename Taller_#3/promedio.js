const salarios = [
    100,
    200,
    300,
    500
];

function calcularMedia(array){
    let total=0;
    let cont=0;

    for(i of array){
        total+=i;
        cont++;
    }
    return total/cont;
}

function calcularMedia2(array){
    let total=0;
    
    for(i of array){
        total+=i;
    }
    return total/array.length;
}

function calcularMedia3(arrays){
    const total = arrays.reduce(
        function(suma = 0, newElement){
            return suma + newElement;
        }
    );

    return total/arrays.length;
}    


