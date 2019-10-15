var valor = 0;
function calc(num){
   document.getElementById("resultado").value += num;
 }

function calcule (){
  var result = 0;
  result = document.getElementById("resultado").value;
  document.getElementById("resultado").value = eval(result);
}

function soma(){
    valor += parseFloat(document.getElementById("resultado").value);
}

function subt(){
    valor -= parseFloat(document.getElementById("resultado").value);
}

function acumulado(){
    calc(valor);
}