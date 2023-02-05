// 1 preentrega PF
alert("Bienvenido a USD Exchanges");

console.log("Ejemplo Condicional");

let edad = parseInt(prompt("Cuántos años tenes?"));

if (edad < 18) {
    alert ("Sos un wachin, anda a pedir plata a mama y papa para comprar dolares");
}   else if (edad > 100) {
    alert ("Aguanta Matusalen");
}   else {
    alert ("Pase Señor");
}

console.log(edad);

console.log("Ejemplo Ciclo");
console.log("Valores de 100,200 y 300usd")
for(let i = 100; i <= 300; i = i + 100) {
    console.log(i * 350 + " pesos arg")
}

console.log("Ejemplo function");


let pesos = parseInt(prompt("Ingrese la cantidad de pesos a cambiar"));

function convertidor(Pesos){
    alert("Usted recibira " + (Pesos / 350) + "usd");
}

convertidor(pesos);
console.log(pesos);

