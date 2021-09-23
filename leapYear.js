
// let input2 = 2000
let result = "";

function leap() {
    let input1 = parseInt(document.getElementById('angka1').value);
    let input2 = parseInt(document.getElementById("angka2").value);
    
    for (let input1 = 1900 + 4; input1 < input2 + 4; input1 += 4){
        result += input1 + ",";
        document.getElementById('hasil').innerText = result;
        // console.log(input1);
    }
}
