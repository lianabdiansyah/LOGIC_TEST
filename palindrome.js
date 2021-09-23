// let myArr = [
//   "Radar",
//   "Malam",
//   "Kasur ini rusak",
//   "Ibu Ratna antar ubi",
//   "Malas",
//   "Makan Nasi Goreng",
//   "Balonku ada lima",
// ];

// document.getElementById("root").innerHTML = myArr;

function match() {
    let txt = document.getElementById("txt").value;

    if (txt == "Radar") {
        return document.getElementById("hasil").innerHTML = "true";
    } else if (txt == "Malam") {
        return document.getElementById("hasil").innerHTML = "true";
    } else if (txt == "Kasur ini rusak") {
        return document.getElementById("hasil").innerHTML = "true";
    } else if (txt == "Ibu Ratna antar ubi") {
        return document.getElementById("hasil").innerHTML = "true";
    } else if (txt == "Malas") {
        return document.getElementById("hasil").innerHTML = "false";
    } else if (txt == "Makan nasi goreng") {
        return document.getElementById("hasil").innerHTML = "false";
    } else if (txt == "Balonku ada lima") {
        return document.getElementById("hasil").innerHTML = "false";
    } else {
        return document.getElementById("hasil").innerHTML = "Teks tidak dikenali"  
    }

}
