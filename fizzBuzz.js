function proses() {
    let angka = parseInt(document.getElementById('angka').value);

    if ((angka % 3 == 0) && (angka % 5 == 0)){
        return document.getElementById('hasil').innerHTML = "FizzBuzz";
    } else if (angka % 3 == 0) {
        return (document.getElementById("hasil").innerHTML = "Fizz");
    } else if (angka % 5 == 0) {
        return (document.getElementById("hasil").innerHTML = "Buzz");
    } else {
        return (document.getElementById("hasil").innerHTML = "true");
    }
}