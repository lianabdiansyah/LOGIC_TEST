var result=[]
let array = [15, 1, 3];

let jumlah = array.reduce((total, value) => {
    return total + value;
});
// console.log(jumlah);

function fib(num) { 

        let f0 = 0, f1 = 1, next;

        for (let i = 0; i <= num; i++){
            result = f0
            // console.log(result)
            next = f0 + f1;
            f0 = f1;
            f1 = next;
    }
    // console.log(result)

    if (result - jumlah == 1 )  {
        return 1;
    } else if (result - jumlah == 2) {
        return 2;
    } else {
        return "tidak dapat diproses"
    }
    
}

console.log(fib(8))