function calcSum(num) {
    let n = 0;
    for (let i = 1; i <= num; i++) {
        n = n + i;
        // n += i;
    };
    return n;
};

console.log(calcSum(4));
console.log(calcSum(10));
console.log(calcSum(15));