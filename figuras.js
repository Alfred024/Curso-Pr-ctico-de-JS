
///////////////////CUADRADO///////////////////////////////
console.group("Cuadrados")

function perimetroCuadrado(lado){
    return lado*4;
}

function areaCuadrado(lado){
    return lado*lado;
}
console.groupEnd();
///////////////////////////////////////////////////////////


///////////////////Triángulos///////////////////////////
console.group("Cuadrados")

function perimetroTriangulo(lado1, lado2, base){
    return lado1+lado2+base;
}

function areaTriangulo(base, altura){
    return (base*altura)/2;
}

console.groupEnd();
///////////////////////////////////////////////////////////



///////////////////CIRCULOS///////////////////////////////
console.group("Círculos");

const PI = Math.PI;

function diametroCirculo(radio){
    return radio*2;
}

//LLamar una función dentro de otra función
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro*PI;
}

function areaCirculo(radio){
    return (radio*radio) * PI;
}
console.groupEnd();
///////////////////////////////////////////////////////////