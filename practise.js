function highAndLow(numbers) {
    let arr = numbers.split(' ');
    let max = arr[0], min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (parseInt(arr[i]) > max) {
            max = arr[i];
        }
        if (parseInt(arr[i]) < min) {
            min = arr[i]
        }
    }
    let result = max + ' ' + min;
    return result;
}

let highAndLowNumber = highAndLow('1 434 3 2 2')
console.log('highAndLowNumber:', highAndLowNumber)


function duplicateCount(text) {
    if (!text) return 0; // no need moving forward if input is empty

    const tracker = new Set(); // keep track of all characters in the input
    const dupes = new Set(); // keep track of duplicate characters

    for (const char of text.toLowerCase()) {
        if (tracker.has(char)) {
            dupes.add(char);
            // console.log('dupes:',dupes)
        } else {
            tracker.add(char);
        }
    }

    return dupes.size;
}

let duplicateCountRes = duplicateCount('e3e3e333311')
console.log('duplicateCountRes:', duplicateCountRes)

function spinWords(str) {
    let arr = str.split(' ');
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        arr[i].length > 4 ? arr[i] = arr[i].split('').reverse().join('') : arr[i]
    }
    return arr.join(' ');
}

const spinWordsRes = spinWords('here you go tipeeed')
console.log('spinWordsRes:', spinWordsRes)

function sortNotEvenNumber() {
    let array = [5, 3, 501, 2, 8, 1, 4, 10, 11, 21,],
        indices = [];

    return array
        .filter((v, i) => v % 2 && indices.push(i))
        .sort((a, b) => a - b)
    // .forEach((v, i) => array[indices[i]] = v);


}

const sortNotEvenNumberRes = sortNotEvenNumber()
console.log('sortNotEvenNumberRes:', sortNotEvenNumberRes)

// sortObj Reduce

let sortObjectExample = {
    '10': 'десять',
    '1': 'один',
    '30': 'тридцать',
    '2': 'два',
    '4': 'четыре',
    '32': 'тридцать три'
}

function sortObject(obj) {
    return Object.keys(obj).sort().reduce((result, key) => {
        result[key] = obj[key];
        return result;
    }, {});
}

// const sortObject = o => Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {})

let sortObjectRes = sortObject(sortObjectExample)
console.log('sortObjectRes:', sortObjectRes)

function getInParallel(apiCalls) {
    let rFunt = apiCalls.map((funct) => {
        return funct()
    })
    return Promise.all(rFunt).then((res) => {
        return res
    })
}

let promise = getInParallel([
    () => Promise.resolve("First API call!"),
    () => Promise.resolve("Second API call!")
]);

if (promise) {
    promise.then((result) => console.log(result)).catch((err) => console.log(err));
}


// ********** ~class extends
class Car {
    constructor(brand) {
        this.carBrand = brand
    }

    carName() {
        return this.carBrand
    }
}

class Model extends Car {
    constructor(brand, modelNumber) {
        super(brand);
        this.model = modelNumber
    }

    show() {
        return this.carName() + ' - ' + this.model
    }
}

class1 = new Car('accord')
class2 = new Model('honda', 'accord')
// console.log(class2.show())

// ********** isPalindrome
// function isPalindrome(string) {
//   let reversed = [];
//   for (let i = string.length-1; i >= 0; i--) {
//       console.log('string[i]:', string[i])
//     reversed.push(string[i]);
//   }
//   for(let j=0;j<string.length;j++){
//       // console.log('string[j]:', string[j])
//   }
//   console.log(reversed.join(""))
//   return string === reversed.join("");
// }
// console.log(isPalindrome('dimon'))

// console.log(arraySum([[1, 2, [3, 4]], [9], [10, 12]]));
// sorting

function quickSort(array) {
    // console.log('array length:', array.length)
    if (array.length <= 1) {
        console.log('array.length <= 1:', array)
        // console.log('count:', count)
        return array
    }
    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex]
    console.log('pivot:', pivot)
    let less = []
    let greater = []
    let count=0
    for (let i = 0; i < array.length; i++) {
        count += 1
        if (i === pivotIndex)
            continue
        if (array[i] < pivot) {
            console.log('less:', array)
            less.push(array[i])
        } else {
            console.log('greater:', greater)
            greater.push(array[i])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}

let quickSortArr = [1,100,2,300]
let quickSortRes = quickSort(quickSortArr)
console.log('quickSortRes:', quickSortRes)

// найти минимальный и мксимальный элеменет быстро
function hignMinMaxNumberOneStep(numbers) {
    let min
    let max
    let count = 0
    numbers.forEach(number => {
        // console.log(number)
        count++
        if (number < min || min === undefined) {
            min = number
        }
        if (number > max || max === undefined) {
            max = number
        }

    })
    return [min, max, count]
}

let hignMinMaxNumberOneStepRes = hignMinMaxNumberOneStep([1, 2, 333, 4, 555, -666, 333, 2, 3, 4, 99, -777, 333])
console.log('hignMinMaxNumberOneStepRes:', hignMinMaxNumberOneStepRes)

let arrUnique = [1, 3, 3, 2, 2]

function findUnique(arr) {
    let unique = []
    arr.map(i => {
        let check = arr.filter(b => b === i)
        if (check.length === 1) {
            unique.push(i)
        }
    })
    return unique[0]
}

let findUniqueRes = findUnique(arrUnique)
console.log('findUniqueRes:', findUniqueRes)


function reverseWords(str) {
    let wordsArr = str.split(' ')

    function reverseString(str) {
        let newString = "";
        for (let i = str.length - 1; i >= 0; i--) {
            newString += str[i];
        }
        return newString;
    }

    let result = ''
    for (const word of wordsArr) {

        if (reverseString(word)) {
            // console.log('reverseString:',reverseString(word))
            result += reverseString(word) + ' '
        }

    }
    return result
}
let reverseWordsRes = reverseWords('The quick brown fox jumps over the lazy dog.')
console.log( 'reverseWordsRes:', reverseWordsRes)

let fObj = {name: 'fObjName'}

// find duplicate from object

const duplicateObjArr = [
    {id: 1, name: "test1"},
    {id: 2, name: "test2"},
    {id: 2, name: "test3"},
    {id: 3, name: "test4"},
    {id: 4, name: "test5"},
    {id: 5, name: "test6"},
    {id: 5, name: "test7"},
    {id: 6, name: "test8"}
];

// 1
const filtered1 = duplicateObjArr.reduce((acc, current) => {
    const x = acc.find(item => item.id === current.id)
    if (!x) {
        return acc.concat([current])
    } else {
        return acc
    }
    return acc.concat([current])
}, []);
console.log('first method:', filtered1)

const ids = duplicateObjArr.map(i => i.id)
const filtered2 = duplicateObjArr.filter(({id}, index) => !ids.includes(id, index + 1))
console.log('second method:', filtered2)

const filtered3 = duplicateObjArr.reduce((map, obj) => {
    return map.set(obj.id, obj)
}, new Map())
console.log('third  method:', filtered3)

const rmDuplicateFromAray = [10, 12, 12, 12, 5, 3, 2, 8, 1, 4]
const rmDuplicateFromArayRes = [...new Set(rmDuplicateFromAray)]
console.log('rmDuplicateFromAray:', rmDuplicateFromArayRes)

const showDuplicateFromArayRes = rmDuplicateFromAray.filter((item, index) => rmDuplicateFromAray.indexOf(item) !== index)
console.log('show duplicate:', showDuplicateFromArayRes)