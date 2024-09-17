function insert(number) {
  var numero = document.getElementById("result").textContent;
  document.getElementById("result").textContent = numero + number;
  if (numero.length > 12) {
    document.getElementById("result").style.fontSize = "20px";
    console.log(typeof numero.length);
  }
}
function clean() {
  document.getElementById("result").textContent = "";
  document.getElementById("result").style.fontSize = "40px";
}
function back() {
  var result = document.getElementById("result").textContent;
  document.getElementById("result").textContent = result.substring(
    0,
    result.length - 1
  );
}
function calcular() {
  var result = document.getElementById("result").textContent;
  if (result) {
    document.getElementById("result").textContent = eval(result);
  } else {
    document.getElementById("result").textContent = "";
  }
}
