function fn() {
  return 'Code Here';
}

const arrowFn = () => 'Code here';

const arrowFn2 = () => {
  //mais de uma expressão
  return 'Code here';
};

//Funções também são objetos
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

//Receber parâmetros
const logValue = (value) => console.log(value);
const logFnResult = (fnParam) => console.log(fnParam());
logFnResult(fn);
