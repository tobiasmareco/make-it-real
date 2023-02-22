function joinWord(data) {
    let result = '';
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        result += data[i] + ' ';
    }
    return result;
};

console.log(joinWord(['hola', 'tobias', 'Mareco']))
console.log(joinWord(['Make', 'it', 'Real']));
console.log(joinWord([]));