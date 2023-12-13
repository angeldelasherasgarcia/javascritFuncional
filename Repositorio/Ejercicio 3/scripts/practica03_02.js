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
  listaDeCompra.forEach((producto,index) => {
    const li = document.createElement('li');
    //Crea elemento de texto para el producto
    const textoProducto = document.createTextNode(producto);
    li.appendChild(textoProducto);

    // Botón para eliminar el elemento
    const botonEliminar = agregarBotonALista(eliminarProducto,'Eliminar',producto);
    // Agregar el botón al elemento <li>
    li.appendChild(botonEliminar);
    // Botón para eliminar el elemento
    const botonModificar = agregarBotonALista(modificarProducto,'Modificar',index);
    // Agregar el botón al elemento <li>
    li.appendChild(botonModificar);
     // Agregar el elemento <li> a la lista
     listaCompraElement.appendChild(li);
  });
}

// Función para eliminar el primer y último producto de la lista
function eliminarExtremos() {
  if (listaDeCompra.length >= 2) {
    listaDeCompra = listaDeCompra.slice(1, -1);
    actualizarLista();
  }
}

function obtenerNuevoValorParaProducto(producto) {
    return prompt('Ingrese el nuevo valor para el producto:', producto);
}
  
function modificarProducto(index) {
    const nuevoValor = obtenerNuevoValorParaProducto(listaDeCompra[index]);
  
    if (nuevoValor !== null) {
      listaDeCompra = [...listaDeCompra.slice(0, index), nuevoValor, ...listaDeCompra.slice(index + 1)];
      actualizarLista();
    }
}

function eliminarProducto(producto){
  // Lógica para eliminar el producto del array listaDeCompra
  listaDeCompra = listaDeCompra.filter(item => item !== producto);
  // Actualizar la lista después de eliminar
  actualizarLista();
}

function agregarBotonALista(accion,texto,producto){
    const genericButton = document.createElement('button');
    genericButton.textContent = texto;
    genericButton.onclick = function() {
      //lista.removeChild(li);
      accion(producto)
    };
    return genericButton;
}