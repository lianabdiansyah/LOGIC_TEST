

function reverse() {
  let txt = document.getElementById("txt").value;

  let tReverse = txt.split("").reverse().join("");

  document.getElementById("root").innerHTML = tReverse;
}
