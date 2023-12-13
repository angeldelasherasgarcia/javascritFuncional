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
  //Borra el valor de la lista
  listaCompraElement.innerHTML = '';
  //Recorre el array y añade los nuevos elementos
  listaDeCompra.forEach(producto => {
    const li = document.createElement('li');
    li.textContent = producto;
    listaCompraElement.appendChild(li);
  });
}
