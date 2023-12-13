function crearContador(){
    let contador = 0;

  // Función para incrementar el contador
    function incrementar() {
        contador++;
        return contador;
    }

    // Función para obtener el valor actual del contador
    function disminuir() {
        if(contador >0){
            contador--
        }
        return contador;
    }

    function getContador() {
        return contador;
    }

    // Devolver un objeto con las funciones internas
    return {
        incrementar: incrementar,
        disminuir:disminuir,
        getContador: getContador
  };
}

let miContador = crearContador();

    // Funciones para interactuar con el contador desde los botones
function mostrarContador() {
    document.getElementById("valorContador").textContent = miContador.getContador();
}

function aumentarContador() {
    miContador.incrementar();
    mostrarContador();
}

function disminuirContador() {
    miContador.disminuir();
    mostrarContador();
}