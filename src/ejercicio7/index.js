// receta.ingredientes[0] = {
//     nombre: 'pan',
//     cantidad: 2
// };
// receta.ingredientes[1] = {
//     nombre: 'queso',
//     cantidad: 1
// };
let receta = {
};
receta.nombre = 'sandwich';
receta.ingredientes = [];

receta.ingredientes.push({ nombre: 'Pan', cantidad: 2 });
receta.ingredientes.push({ nombre: 'Queso', cantidad: 1 });
console.log(receta);
/*<------------------------------------------------------------------>*/
// imprimir en la consola el primer ingrediente, PAN.
console.log(`El primer ingrediente es: `, receta.ingredientes[0].nombre);
/*<------------------------------------------------------------------>*/
// imprimir en la consola la cantidad total de ingredientes
let sumCantidad = 0;
for (let i = 0; i < receta.ingredientes.length; i++) {
    const cantidad = receta.ingredientes[i].cantidad;
    sumCantidad += cantidad;
};
console.log(`La cantidad total de ingredientes es de: `, sumCantidad);

