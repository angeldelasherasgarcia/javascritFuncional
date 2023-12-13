let historico = [];
let acumuladoNumerico = '';
let operacionPendiente = null;
let valorAnterior = null;
// Función principal para establecer el valor
function setValue(value,isNumber) {
    if(isNumber){
        acumuladoNumerico +=  value;
    }
    historico = addArrValue(historico.slice(),value);
    const acumulado = historico.reduce((acumulador , value)=>{
        let result;
        if(acumulador===0){
            result = value ;
        }else if(value==='='){
            result = acumulador ;
        }else{
            result = acumulador + value ;
        }
        return result;
    },0);
    setValueHtml('acumulado',acumulado);
}
function operacion(op){
    setValue(op,false)
    if (valorAnterior !== null && acumuladoNumerico) {
        calcularResultado();
    }else if(!acumuladoNumerico){
        operacionPendiente = op;
    }else{
        valorAnterior = Number(acumuladoNumerico);
        operacionPendiente = op;
        acumuladoNumerico = '';
    }
}
function calcularResultado() {
    const valorActual = Number(acumuladoNumerico);
    const resultadoFinal = getResult(operacionPendiente,valorAnterior , valorActual)
    valorAnterior = resultadoFinal;
    setValueHtml('resultado', resultadoFinal);
    acumuladoNumerico = '';
}
// Funciones de orden superior para las operaciones
function sumar(a, b) {
    return a + b;
}
  
function restar(a, b) {
    return a - b;
}
  
function multiplicar(a, b) {
    return a * b;
 }
  
function dividir(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      alert("No se puede dividir por cero.");
      return NaN;
    }
}

//Limpiar los valores del input
function setValueHtml(id,value){
    const element = document.getElementById(id);
      if (element) {
        element.innerText = value;
      } else {
        console.error('Elemento no encontrado con ID:', id);
      }
}

function addArrValue(arr, nuevoValor) {
    return [...arr,nuevoValor];
}
function calcularAcumulado(arr) {
    return arr.reduce((acumulador, valor) => acumulador + valor, 0);
}
function getResult(operacion,a,b){
    let result;
    switch (operacion) {
        case '+':
            result = sumar(a,b);
          break;
        case '-':
            result = restar(a,b);
          break;
        case '*':
            result = multiplicar(a,b);
          break;
        case '/':
            result = dividir(a,b);
          break;
    }
    return result;
}
function limpiarDisplay(){
    setValueHtml('acumulado','');
    setValueHtml('resultado', 0);
    valorActual = null;
    valorAnterior = null;
    acumuladoNumerico = '';
    operacionPendiente = null
    historico = [];
}