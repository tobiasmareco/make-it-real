function colors(num) {
    let color;
    if (num == '1') {
        color = 'Black';
    } else if (num == '2') {
        color = 'White';
    } else if (num == '3') {
        color = 'Red';
    } else {
        color = 'Green'
    };
    return `El color es: ${color} ,(${num})`;
}

console.log(colors(1))
console.log(colors(4))
console.log(colors(2))
console.log(colors(3))
console.log(colors(5))