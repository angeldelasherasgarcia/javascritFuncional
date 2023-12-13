// Función para obtener el valor de un elemento por su ID
const obtenerValorPorId = (id) => Number(document.getElementById(id).value);

const calcularArea = (radio) => {
    // Asegurarse de que el radio sea un número positivo
  if (typeof radio === 'number' && radio > 0) {
    // Fórmula para calcular el área de un círculo: A = π * r^2
    const area = Math.PI * Math.pow(radio, 2);
    return area;
  } else {
    // En caso de entrada inválida, devolver NaN
    return NaN;
  }
}
// Función para mostrar el resultado en el HTML
const mostrarResultado = (resultado) => {
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = `El area es: ${resultado}`;
    
};

function obtenerRadio(){
    const radio = obtenerValorPorId("radioId");
    const resultado = calcularArea(radio);
    if(resultado){
      mostrarResultado(resultado);
    }
}