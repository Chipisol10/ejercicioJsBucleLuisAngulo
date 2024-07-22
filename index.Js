//Ejercicio 1
let tablasDeMultiplicar = prompt("¿Que tabla desea ver ingrese un numero del 1 al 10")

for (let i = 0; i <10; i++){
    console.log(tablasDeMultiplicar*i)
}

//Ejercicio 2

let suma = 0

let numero;

while(true){
    numero = prompt("ingrese un numero por favor(ingrese 0 para terminar)" )
    numero = Number(numero)
    if(numero===0){
        break;
    }
    suma += numero; 
    alert("suma actual: " + suma)
}

alert("la suma total es :" + suma);

alert("Programa finalizado")

Ejercicio 3



let numeroSecreto = 77

let intento = 0

let acertado = false

while (acertado === false) {
    intento++
    let numeroingresado = Number(prompt("Ingrese un numero entre el 1 al 100"))
    if(numeroingresado === numeroSecreto){
        alert("felicidades has ganado")
        acertado = true        
    }else if(numeroingresado>numeroSecreto){
        alert("Su numero ingresado es mayor al numero secreto")
    }else {
        alert("Su numero ingresado es menor al numero secreto")
    }
    
}

alert("haz ganado y el numero de intento fuero: "  + intento)

Ejercicio 4

let inicializacion = 0
let usuario = parseInt(prompt("Ingrese un numero"))

for (let i = 1; i <= usuario; i++){
    if (usuario % i == 0) {
        inicializacion = inicializacion +1;       
    }
    
}

if (inicializacion == 2) {
    alert("Es un numero primo")
}else{
    alert("No es un numero primo")
}

Ejercicio 5

let usuario = parseInt(prompt("Ingrese un numero, por favor"))

let conteo = 0 
console.log("Los numeros divisores del numero:  " + usuario);
while (conteo <= usuario ) {

    if (usuario % conteo == 0) {
        console.log(conteo);
    }
    conteo++;
}


Ejercicio 6

let elementosFutbol=["balon","zapatillas","botines","short","franela","guayos","canillera","medias","tacos","sudaderas"]

for(let i=0; i<elementosFutbol.length; i++){
    console.log(elementosFutbol[i])
}

Ejercicio 7

let num=[1,2,3,4,5,6,7,8,9,10]
    
for(let i=0; i<num.length; i++){
    let doble = num[i] * 2;
    console.log("El resultado del doble de cada elemento  " + num[i] + " es: " + doble)
        
}

Ejercicio 8

let familia = [{
    nombre:"Ramon",
    edad:62,
    profesion: "Administrador",
    parentesco:"padre",
},{
    nombre:"Eunice",
    edad:61,
    profesion: "Enfermera",
    parentesco:"madre",
},{
    nombre:"Gerardo",
    edad:25,
    profesion:"Ingeniero",
    parentesco:"hija",
},{
    nombre:"Soleida",
    edad:35,
    profesion:"Nutricionista",
    parentesco:"hija",
},{
    nombre:"Adriana",
    edad: 29,
    profesion: "Abogada",
    parentesco:"hija"
}]

for (let i = 0; i < familia.length; i++) {
    let integrantes = familia[i];
    let mensaje = "Hola soy " + integrantes.nombre +  " tengo "  + integrantes.edad + " años y mi profesion es  " + integrantes.profesion + " y mi parentesco en mi famila es de: " + integrantes.parentesco;
    console.log(mensaje)
}

Ejercicio 9

let array = [13, 4, 5, 8, 21, 18, 11, 26, 23, 33];

for (let i = 0; i < array.length; i++) {
    let num = array[i];

    let impar = true;

    while (num >= 2) {
        num = num - 2;
    }

    if (num === 0) {
        impar = false;
    }

    if (impar) {
        console.log(array[i]);
    }
}


Ejercicio 10

let sumPar = 0;
let sumImpar = 0;
let num;

do {
    num = parseInt(prompt("Ingrese un número (para finalizar el programa necesita marcar el 0):"));

    if (num !== 0) {
        if (num % 2 === 0) {
            sumPar = sumPar + num;
        } else {
            sumImpar = sumImpar + num;
        }
    }
} while (num !== 0);

console.log("La suma de los números pares es: " + sumPar);
console.log("La suma de los números impares es: " + sumImpar);




Ejercicio 11

let arra = [12,25,32,45,200,55,23,77,100,1]
let  numeroMayor= 0
for(let i = 0; i <= arra.length; i++){
    if(arra[i] > numeroMayor){
        numeroMayor = arra[i];
         }
    
}
alert("El numero mayor del array es: " + numeroMayor)

Ejercicio 12

let menor = [12,34,45,200,10,5]
let min = menor[0]
for(let i = 0; i <menor.length; i++){
    if(min > menor[i]){
        min = menor[i]
    }
}

console.log("El numero menor del array es: " + min);

Ejercicio 13

function quienJugara(participante) {
    let jugada;
    let jugadaValida = false;
    while (jugadaValida === false) {
        jugada = parseInt(prompt(participante + ", elige: 1 - piedra, 2- papel, 3 - tijeras:"));
        if (jugada === 1) {
            jugadaValida = true;
        }
        if (jugada === 2) {
            jugadaValida = true;
        }
        if (jugada === 3) {
            jugadaValida = true;
        }
    }
    return jugada;
}

function quienGano(jugada1, jugada2) {
    if (jugada1 === jugada2) {
        return "empate";
    }
    if (jugada1 === 1) {
        if (jugada2 === 3) {
            return "jugador1";
        }
    }
    if (jugada1 === 2) {
        if (jugada2 === 1) {
            return "jugador1";
        }
    }
    if (jugada1 === 3) {
        if (jugada2 === 2) {
            return "jugador1";
        }
    }
    return "jugador2";
}

let jugador1 = prompt("Ingrese el nombre del primer jugador:");
let jugador2 = prompt("Ingrese el nombre del segundo jugador:");

let elGanador = null;

while (elGanador === null) {
    let jugada1 = quienJugara(jugador1);
    let jugada2 = quienJugara(jugador2);

    let resultado = quienGano(jugada1, jugada2);

    if (resultado === "empate") {
        console.log("Empate! Vamos de nuevo.");
    } else {
        if (resultado === "jugador1") {
            elGanador = jugador1;
        } else {
            elGanador = jugador2;
        }
    }
}

console.log(" " + elGanador + " Haz ganado el juego!");

-------Ejercicio 14-----------

let fil = 5;

for (let i = 1; i <= fil; i++) {
    let lin = '';

    for (let j = 1; j <= i; j++) {
        lin = lin + '*';
    }

    console.log(lin);

}

// Ejercicio 15
let filrev = 5;

for (let i = filrev; i >= 1; i--) {
    let lin = '';

    for (let j = 1; j <= i; j++) {
        lin = lin + '*';
    }

    console.log(lin);
}

 
Ejercicio 16


    let listaDesordenada = [3,4,6,7,8,9,2,1,5,10]
    let i, num, ord, aux;

    num = listaDesordenada.length;
    for (ord = 1; ord < num; ord++) {
        for (i = 0; i < (num-ord); i++) {
            if(listaDesordenada[i] > listaDesordenada[i+1]){
                aux = listaDesordenada[i];
                listaDesordenada[i] = listaDesordenada [i+1];
                listaDesordenada[i+1] = aux;
            }
            
            
        }
        
    }
    alert(listaDesordenada);