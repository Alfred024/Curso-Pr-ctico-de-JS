const lista = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1
];

const lista2 = [
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    1
];

function calcularModa2(lista){
    const listaCount = {};

    lista.map(
        function(elemento){
            if(listaCount[elemento]){
                listaCount[elemento]+=1;
            }else{
                listaCount[elemento] = 1;
            }
        }
    );

    const listaArray = Object.entries(listaCount).sort(
        function(valorAcumulado,nuevoValor){
            return valorAcumulado[1] - nuevoValor[1];
        }
    );
    
    const moda = listaArray[listaArray.length-1];
    return moda;

}

const listaCount = {};

////////////Función hecha por mí///////////////
//  function calcularModa(lista){

//      //const listaCount = {};
//      for( i of lista){
//          if(listaCount[i]){
//              listaCount[i]+=1;
//          }else{
//              listaCount[i] = 1;
//          }
//      };

//      const listaArray = Object.entries(listaCount).sort(
//         function(valorAcumulado,nuevoValor){
//             valorAcumulado - nuevoValor
//         }
//     );
    
//     let moda =0;
//     for(let i = 0; i<listaArray.length; i++){
//         if(listaArray[i][1]>moda){
//             moda = listaArray[i][0]
//         }
//     } 

//     return moda;
//  }




//////////////////////////////////////////////////
//Función del profesor JuanDC uwu
 lista.map(
     function(elemento){
         if(listaCount[elemento]){
             listaCount[elemento]+=1;
         }else{
             listaCount[elemento] = 1;
         }
     }
 );

 //El método "Object.entries", convierte un objeto a un array
const listaArray = Object.entries(listaCount).sort(
    function(valorAcumulado,nuevoValor){
        return valorAcumulado[1] - nuevoValor[1];
        //Lo de arriba es lo mismo que lo de abajo pero más barato
        //Los returns van a indicar como cambiará la posición del número. Al tener 1, se moverá hacia la derecha, el 0 indica que se qued adonde está y el -1 retrocede el número
        // if(valorAcumulado>nuevoValor){
        //     return 1; 
        // }
        // if(nuevoValor === valorAcumulado){
        //     return 0;
        // }else{
        //     return -1;
        // }
    }
);

const moda = listaArray[listaArray.length-1];
