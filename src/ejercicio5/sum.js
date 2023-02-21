//Crea una función sum que reciba
// un arreglo de números y retorne la
// suma de todos los elementos:

function sumArr(data) {
    if ((data.length) > 0) {
        let s = 0;
        for (let i = 0; i < data.length; i++) {
            s = data[i] + s;
        }
        return s;
    }
    return 0;
};

console.log(sumArr([1, 2, 3]));
console.log(sumArr([10, 8, 12, 5]));
console.log(sumArr([]));
