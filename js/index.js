let resultado = document.getElementById('resultado');

const asignar = (valor) => resultado.value += valor;
    
const calcular = () =>  { if(resultado.value!='') resultado.value = eval(resultado.value); } 
//Esta cadena de JS es la que hace la operacion de la calculadora