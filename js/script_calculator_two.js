
//Esto agrega a la pantalla el valor del bóton de la calculadora que toquemos
function agregar(valor) {
    document.getElementById('pantalla2').value += valor;
}


//Esta accion vacia la pantalla
function borrar() {
    document.getElementById('pantalla2').value = '';
}

//Esta acción toma el valor de la pantalla y ejecuta los calculos
function calcular(){
    const valorPantalla = document.getElementById('pantalla2').value
    //eval=agarra un string y calcularlo matematicamente()
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla2').value = resultado;
}