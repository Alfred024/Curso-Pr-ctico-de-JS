
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
console.group("Triángulos")

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


//Conectando HTML con Javascript

///////////////////CUADRADO///////////////////////////////
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
    console.log(area);
}


///////////////////TRIAGULO/////////////////////////////
function calcularPerimetroTriangulo(){
    const input = document.getElementById("inputTriangulo");
    const value = input.value;
    const input2 = document.getElementById("inputTriangulo2");
    const value2 = input2.value2;
    const inputBase = document.getElementById("inputTrianguloBase");
    const valueBase = inputBase.valueBase;

    const perimetro = perimetroTriangulo(value,value2,valueBase);
    alert(perimetro);
}