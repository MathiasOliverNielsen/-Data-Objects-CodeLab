/* Opgave 1*/
console.group('opgave 1');
const data = {
  items: ['a', 'b', 'c', 'd', 'e'],
};

data.items.push('f');

console.log(data.items);

/*opgave 2*/
console.group('opgave 2');
// Slet item 2 fra data.items arrayen
data.items.splice(1, 1);
console.log(data.items);
console.groupEnd();

/*opgave 3*/
console.group('opgave 3');

console.groupEnd();
