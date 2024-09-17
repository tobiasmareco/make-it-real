// Crea una función maxIndex que
// reciba una arreglo de números y
// retorne el índice donde se encuentra el
// mayor. Si el arreglo está vacío debe
// retornar -1

function maxIndexNumber(data) {
    if (data.length > 1) {
        let maxNum = 0;
        let index;
        for (let i = 0; i < data.length; i++) {
            if (data[i] > maxNum) {
                maxNum = data[i];
                index = i;
            }
        }
        return `El mayor es: ${maxNum} ,posicion: ${index}`;
    }
    // return data.indexOf(data.length);
    return -1;
};

console.log(maxIndexNumber([10, 2, 5, 4]))
console.log(maxIndexNumber([21, 51, 200, 1]));
console.log(maxIndexNumber([7, 2, 1, 5]));
console.log(maxIndexNumber([500, 200, 10, 600]));
console.log(maxIndexNumber([]));

