// Array para almacenar la lista de compra
let listaDeCompra = [];

// Función para agregar un producto a la lista
function agregarProducto() {
    const nuevoProducto = document.getElementById('nuevoProducto').value;
    //Quitamos espacios en blanco
    if (nuevoProducto.trim() !== '') {
      listaDeCompra = [...listaDeCompra, nuevoProducto];
      actualizarLista();
    }
    limpiarValorInput();
}
//Limpiar los valores del input
function limpiarValorInput(){
    document.getElementById('nuevoProducto').value = '';
}

// Función para actualizar la lista en el HTML
function actualizarLista() {
  const listaCompraElement = document.getElementById('listaCompra');
  listaCompraElement.innerHTML = '';
  listaDeCompra.forEach(producto => {
    const li = document.createElement('li');
    //Crea elemento de texto para el producto
    const textoProducto = document.createTextNode(producto);
    li.appendChild(textoProducto);

    // Botón para eliminar el elemento
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.onclick = function() {
      //lista.removeChild(li);
      eliminarProducto(producto)
    };
     // Agregar el botón al elemento <li>
     li.appendChild(botonEliminar);

     // Agregar el elemento <li> a la lista
     listaCompraElement.appendChild(li);
  });
}

function eliminarProducto(producto){
  // Lógica para eliminar el producto del array listaDeCompra
  listaDeCompra = listaDeCompra.filter(item => item !== producto);
  // Actualizar la lista después de eliminar
  actualizarLista();
}