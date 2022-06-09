
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
    return Number(lado1)+Number(lado2)+Number(base);
}

function areaTriangulo(base, altura){
    return (Number(base)*Number(altura))/2;
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
    return (Number(radio)*Number(radio)) * PI;
}
console.groupEnd();
///////////////////////////////////////////////////////////


//Conectando HTML con Javascript

//BOTONES DEL CUADRADO
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
}


//BOTONES DEL TRIÁNGULO
function calcularPerimetroTriangulo(){
    const input = document.getElementById("inputTriangulo");
    const value = input.value;
    const input2 = document.getElementById("inputTriangulo2");
    const value2 = input2.value;
    const inputBase = document.getElementById("inputTrianguloBase");
    const valueBase = inputBase.value;
    
    const perimetroTrian = perimetroTriangulo(value, value2, valueBase);
    alert(perimetroTrian);
}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("inputTrianguloBase");
    const valueBase = inputBase.value;
    const inputAltura = document.getElementById("inputTrianguloAltura");
    const valueAltura = inputAltura.value;

    const areaTrian = areaTriangulo(valueBase, valueAltura);
    alert(areaTrian);
}

//BOTONES DEL CIRCULO
function calcularPerimetroCirculo(){
    const input = document.getElementById("inputRadio");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputRadio");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}