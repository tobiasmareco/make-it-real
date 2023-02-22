// Crea una función max que reciba un 
// arreglo de números y retorne el número 
// máximo SIN USAR el método Math.max 
// de JavaScript. Si el arreglo está vacío 
// debe retornar undefined

function maxNumber(data) {
    let maxNum = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i] > maxNum) {
            maxNum = data[i];
        }
    }
    return maxNum;
};

console.log(maxNumber([1, 2, 3, 4]));
console.log(maxNumber([10, 200, 300, 14]));
console.log(maxNumber([11, 26, 31, 24]));
