// Area y perimero del cuadrado
const valueResult =document.getElementById('result');
const areaSquare =(side) => side*side;
const perimSquare = (side) => side*4;

function calculateAreaSquare(){
    let imputSide = document.getElementById('imputSide');
    let value = Number(imputSide.value);

    const result =`El área del cuadrado es: ${areaSquare(value)} cm^2`;
    valueResult.innerText=result;
}
function calculatePerimSquare(){
    let imputSide = document.getElementById('imputSide');
    let value = Number(imputSide.value);

    const result =`El perímetro del cuadrado es: ${perimSquare(value)} cm`;
    valueResult.innerText=result;
}

// Area, perimetro y diametro de un circulo

var pi =Math.PI;
const diamCirc =(radio) => radio*2;
const perimCirc =(radio) => 2*radio*pi;
const areaCirc = (radio) => pi*radio*radio;

function calculateDiamCirc(){
    let imputRad = document.getElementById('imputRad');
    let value = Number(imputRad.value);

    const result =`El diametro del circulo es: ${diamCirc(value)} cm`;
    valueResult.innerText=result;
}
function calculatePerimCirc(){
    let imputRad = document.getElementById('imputRad');
    let value = Number(imputRad.value);

    const result =`El perimetro del circulo es: ${perimCirc(value)} cm`;
    valueResult.innerText=result;
}
function calculateAreaCirc(){
    let imputRad = document.getElementById('imputRad');
    let value = Number(imputRad.value);

    const result =`El area del circulo es: ${areaCirc(value)} cm^2`; 
    valueResult.innerText=result;
}

// Area y perimetro de un triangulo

const perimTriang =(sideA, sideB, sideC) =>sideA+sideB+sideC;
const areaTriang =(base, altura) => base*altura*(1/2);

function calculatePerimTriang(){
    let imputSideA = document.getElementById('sideA');
    let valueA = Number(imputSideA.value);
    let imputSideB = document.getElementById('sideB');
    let valueB = Number(imputSideB.value);
    let imputSideC = document.getElementById('sideC');
    let valueC = Number(imputSideC.value);

    const result =`El perímetro del triángulo es: ${perimTriang(valueA,valueB,valueC)} cm`;
    valueResult.innerText=result;
}
function calculateAreaTriang(){
    let imputBase = document.getElementById('Base');
    let base = Number(imputBase.value);
    let imputAltura = document.getElementById('Altura');
    let altura = Number(imputAltura.value);

    const result =`El área del triángulo es: ${areaTriang(base,altura)} cm^2`;
    valueResult.innerText=result;
}