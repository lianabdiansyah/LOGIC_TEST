function palindrome() {
  let str = document.getElementById("txt").value;
  const newStr = str.replace(/[\W_]/g, "").toLowerCase();
  document.getElementById("hasil").innerHTML = newStr.split("").reverse().join("") === newStr;
}
