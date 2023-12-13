// Función de multiplicación
const multiplicar = (a, b) => a * b;

// Función para obtener el valor de un elemento por su ID
const obtenerValorPorId = (id) => Number(document.getElementById(id).value);

// Función para mostrar el resultado en el HTML
const mostrarResultado = (resultado) => {
  const resultadoElement = document.getElementById("resultado");
  resultadoElement.textContent = `Resultado: ${resultado}`;
};

// Función principal que utiliza programación funcional
const calcularMultiplicacion = () => {
  const num1 = obtenerValorPorId("input1");
  const num2 = obtenerValorPorId("input2");
  const resultado = multiplicar(num1, num2);
  //const resultado = operar(multiplicar,num1,num2);
  mostrarResultado(resultado);
};


//Variante 1 : Pasar funcion como argumento

const operar = (func , a,b ) => func(a,b);