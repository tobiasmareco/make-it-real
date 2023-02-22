var people = {
    name: 'tobias mareco',
    age: 20,
    active: true,
    hobbies: ['programar', 'futbol', 'guitarra'],
    greeting: function () {
        return (`Hola, me llamo :${this.name}`)
    }
};

// console.log(people.age);
// people.height = '1.8';
// console.log(people.height);
// delete people.active;
// console.log(people);

var llaves = Object.keys(people);
for (var i = 0; i < llaves.length; i++) {
    var llave = llaves[i];
    console.log(people[llave]);
}

console.log(people.greeting())