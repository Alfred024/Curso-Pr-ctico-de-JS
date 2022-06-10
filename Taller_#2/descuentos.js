
//Esta función está simplificada a comparación a la del curso, pero es IMPORTANTE recordar que se recomienda mantener a cada variable con una solo responsabilidad, por lo que probablemente hubiera sido mejor hacerlo como en el curso se muestra

 function calcularPrecioConDescuento(precioOriginal,descuento){
     return precioOriginal - (precioOriginal*(descuento/100));
 }


function cupponDescuento(precioConDescuento, descuentoCuppon){
    return precioConDescuento - (precioConDescuento*(descuentoCuppon/100));
}

//Mi función
  function calcularDescuentoButton(){
      const inputPrecio = document.getElementById("inputPrice");
      const valuePrecio = inputPrecio.value;
      const inputDiscount = document.getElementById("inputDiscount");
      const valueDiscount = inputDiscount.value;
      const inputCuppon = document.getElementById("inputCuppon");
      const valueCuppon = inputCuppon.value;


      const resultado = calcularPrecioConDescuento(valuePrecio,valueDiscount);

      const resultadoCuppon = cupponDescuento(resultado, valueCuppon);

      const respuesta = document.getElementById("result");
      respuesta.innerText = "Precio con descuento y cupón: $"+resultadoCuppon;
  }

 //Funciones de Juán


