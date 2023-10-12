const pantalla = document.querySelector(".pantalla");
// console.log(pantalla)

//Con el querySelector me hace un array
const botones = document.querySelectorAll(".btn");
// console.log(botones)

//Consultamos el array
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        // console.log(boton.textContent);
        const botonPresionar = boton.textContent;


        if (boton.id === "reset") {
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrar") {
            // .length = nos quiere decir que si tenemos solo un caracterer en la pantalla le ponga cero
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                // slice = para obtener una subcadena del contenido de texto.
                //slice (0 , ) positicion cero, hasta la posicion que digamos que eliminar que seria el ultimo caracter(-1)
                pantalla.textContent = pantalla.textContent.slice(0, -1)
            }
            return;
        }


        if(boton.id === "igual"){
            try{
                pantalla.textContent = eval(pantalla.textContent);
            }catch{
                pantalla.textContent = "Error!";
            }
            return
        }
        //Con eso mostrarmos los resultados en la pantalla
        //usando .textContent
        // pantalla.textContent = botonPresionar
        // pantalla.textContent += botonPresionar

        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonPresionar
        } else {
            pantalla.textContent += botonPresionar
        }




    })
})

