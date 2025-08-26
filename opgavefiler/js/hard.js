/* opgave 1 */
console.group('opgave 1');
// Opret et objekt todoApp med to lister, hver med name og items
const todoApp = {
  indkøb: {
    name: 'Indkøb',
    items: [
      { text: 'Køb mælk', done: false },
      { text: 'Køb brød', done: true },
    ],
  },
  opgaver: {
    name: 'Arbejdsopgaver',
    items: [
      { text: 'Skriv rapport', done: false },
      { text: 'Send email', done: true },
    ],
  },
};
console.log(todoApp);
console.groupEnd();
/* opgave 2 */
console.group('opgave 2');
function addItem(listKey, itemText) {
  if (todoApp[listKey]) {
    todoApp[listKey].items.push({ text: itemText, done: false });
  }
  console.log(todoApp[listKey].items);
}
addItem('indkøb', 'Køb smør');
addItem('opgaver', 'Mød op til møde');
/* opgave 3 */
console.group('opgave 3');
function toggleItemDone(listKey, itemNr) {
  const list = todoApp[listKey];
  if (list) {
    const item = list.items[itemNr];
    if (item) {
      item.done = !item.done;
    }
  }
  console.log(todoApp);
}

toggleItemDone('indkøb', 2);
console.groupEnd();
