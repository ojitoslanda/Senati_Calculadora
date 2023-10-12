//1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga «Hello World».
alert ("Hello World!");

// 2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
document.write("Hello World");

// 3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
document.write(3+5);

// 4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
var nombre = prompt("Escribe tu nombre");
document.write("Hola "+nombre);

// 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
var  n1 = prompt("Escribe un número");
var n2 = prompt("Escribe otro número");
document.write("La suma es: "+ ( parseInt(n1)+ parseInt(n2) ) );

// 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
var n1 = prompt("Escribe un número");
var n2 = prompt("Escribe otro número");
if (n1 > n2) {
document.write(n1);
} else {
document.write(n2);
}
// ======================================

// 6.1 - Pide la edad y si es mayor de 18 años indica que ya puede conducir.
// PIDE POR TECLADO LA EDAD
var edad = prompt("Introduce tu edad");
// COMPRUEBA QUE LO INTRODUCIDO ES UN NÚMERO
if (Number(edad) == edad) {
    // SI ES MAYOR DE 18
    if (edad > 18) {
        // IMPRIME EN PANTALLA EL MENSAJE
        document.write("Puedes conducir");
    }
}
// SI NÓ    
else {
    // MUESTRA UN MENSAJE
    alert("Introduce un numero válido");
}
// ======================================
// 6.2 - Pide una nota (número). Muestra la calificación según la nota:

// 0-3: Muy deficiente
// 3-5: Insuficiente
// 5-6: Suficiente
// 6-7: Bien
// 7-9: Notable
// 9-10: Sobresaliente
// BUCLE PARA QUE PERMITA INTRODUCIR MÁS DE UNA NOTA
do {
    // PIDE UNA NOTA POR TECLADO Y LA GUARDA EN LA VARIABLE nota
    var nota = prompt("Introduce tu nota");
    // SI SE INTRODUJO UN NÚMERO
    if (Number(nota) == nota) {
    // SI LA NOTA ES ENTRE 0 Y 10 COMPRUEBA EL RANGO Y DA UN MENSAJE
    if (nota > 0 && nota <= 10) {
        if (nota < 3) {
            alert("Muy deficiente");
        }
        else if (nota < 5) {
            alert("Insuficiete");
        } else if (nota < 6) {
            alert("Suficiente");
        } else if (nota < 7) {
            alert("Bien");
        } else if (nota < 9) {
            alert("Notable"); 5
        } else if (nota >= 9) {
            alert("Sobresaliente");
        }
    }
    // SI LA NOTA NO ES ENTRE 0 Y 10
    else {
        alert("Nota erronea");
    }
    }
    // SI LA NOTA INTRODUCIDA NO ES UN NÚMERO
    else {
    // SI SE HA PULSADO ACEPTAR SIN INTRODUCIR NADA
    if (nota != undefined) { //No es Undefined cuando se pulsa aceptar.
        alert("Introduce un numero valido");
    }
    }
    // EL BUCLE VUELVE ARRIBA MIENTRAS NO SE HAYA PULSADO CANCELAR
}
while (nota != undefined); // Undefined es cuando se pulsa Cancelar.




// ======================================

// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
var n1 = prompt("Escribe un número");
var n2 = prompt("Escribe otro número");
var n3 = prompt("Escribe otro número");
if (n1 > n2 && n1 > n3) {
document.write(n1);
} else if (n2 > n3) {
document.write(n2);
} else {
document.write(n3);
}

// 8.- Escribe un programa que pida un número y diga si es divisible por 2
var n1 = prompt("Escribe un número");
if (n1 % 2 === 0) {
document.write("Es divisible por 2");
} else {
document.write("No es divisible por 2");
}

// 10.- Escribe un programa que pida una frase y escriba las vocales que aparecen
    var text = prompt("Escribe una frase");
    var nText = text.length;
    var i;
    for (i = 0; i < nText; i++) {
    if (text.substr(i,1) === "a" || text.substr(i,1) === "e" || text.substr(i,1) === "i" || text.substr(i,1) === "o" || text.substr(i,1) === "u") {
    document.write(text.substr(i,1));
    }
    }

// 13.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
var n1 = prompt("Escribe un número");
if (n1 % 2 === 0 || n1 % 3 === 0 || n1 % 5 === 0 || n1 % 7 === 0) {
document.write("Es divisible por 2, 3, 5 o 7");
} else {
document.write("No es divisible ni por 2, ni por 3, ni por 5, ni por 7");
}

// 14.- Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay que decir todos por los que es divisible)
var n1 = prompt("Escribe un número");
if (n1 % 2 === 0 || n1 % 3 === 0 || n1 % 5 === 0 || n1 % 7 === 0) {
if (n1 % 2 === 0) {
document.write("Es divisible por 2. ");
}
if (n1 % 3 === 0) {
document.write("Es divisible por 3. ");
}
if (n1 % 5 === 0) {
document.write("Es divisible por 5. ");
}
if (n1 % 7 === 0) {
document.write("Es divisible por 7. ");
}
} else {
document.write("No es divisible ni por 2, ni por 3, ni por 5, ni por 7");
}

// 15.- Escribir un programa que escriba en pantalla los divisores de un número dado
var n1 = prompt("Escribe un número");
var i;
for (i=2;i < n1/2; i++) {
if (n1 % i === 0) {
document.write(i,", ");
}
}

// 16.- Escribir un programa que escriba en pantalla los divisores comunes de dos números dados
var n1 = prompt("Escribe un número");
var n2 = prompt("Escribe otro número");
var menor;
var i;
if (n1 < n2) {
menor = n1;
} else {
menor = n2;
}
for (i=2; i < menor / 2; i++) {
if (n1 % i === 0 && n2 % i === 0) {
document.write(i,", ");
}
}
// 17.- Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)
// Solución 1
var n1 = prompt("Escribe un número");
var i;
var primer = true;
for (i=2; i < n1 / 2; i++) {
if (n1 % i === 0) {
primer = false;
}
}
if (primer) {
document.write("El número es primo");
} else {
document.write("El número no es primo");
}

// Solución 2
var n1 = prompt("Escribe un número");
var i = 2;
while (n1 % i !== 0 && i < n1 / 2 ) {
i++;
}
if (n1 % i !== 0) {
document.write("El número es primo");
} else {
document.write("El número no es primo");
}