document.getElementById("add").addEventListener("click", add);
document.getElementById("minus").addEventListener("click", minus);
document.getElementById("multiply").addEventListener("click", multiply);
document.getElementById("divide").addEventListener("click", divide);

function result(result) {
  document.getElementById("result").textContent = "result: " + result;
}

function add() {
  let fn = parseFloat(document.getElementById("firstnumber").value);
  let sn = parseFloat(document.getElementById("secondnumber").value);
  let sum = fn + sn;
  result(sum);
}

function minus() {
  let fn = parseFloat(document.getElementById("firstnumber").value);
  let sn = parseFloat(document.getElementById("secondnumber").value);
  let difference = fn - sn;
  result(difference);
}

function multiply() {
  let fn = parseFloat(document.getElementById("firstnumber").value);
  let sn = parseFloat(document.getElementById("secondnumber").value);
  let product = fn * sn;
  result(product);
}

function divide() {
  let fn = parseFloat(document.getElementById("firstnumber").value);
  let sn = parseFloat(document.getElementById("secondnumber").value);
  let quotient = fn / sn;
  result(quotient);
}
