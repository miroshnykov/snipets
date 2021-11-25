// rm duplicate from object
const objArrays = [
    {id: 1, name: 'first'},
    {id: 4, name: 'four'},
    {id: 1, name: 'first'},
    {id: 5, name: 'five'},
    {id: 4, name: 'four'}
];

const idSet = new Set();

let rmDuplicate = objArrays.filter(obj => {
    const existingId = idSet.has(obj.id);
    idSet.add(obj.id);
    return !existingId;
})

// console.log('objArrays:', objArrays)
// console.log('rmDuplicate:', rmDuplicate)

// Проверка наличия ключа в объекте
const sample = {
    prop: 'value'
}

console.log('prop' in sample); // true
console.log('toString' in sample); // true

console.log(sample.hasOwnProperty('prop')); // true
console.log(sample.hasOwnProperty('toString')); // false


