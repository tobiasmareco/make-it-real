function getImc(height, weigth) {
    let result = weigth / height ** 2
    return result;
    // return (weigth / height ** 2);
};
console.log(getImc(1.78, 61));
console.log(getImc(1.80, 78));