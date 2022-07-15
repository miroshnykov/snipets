const arr = [8, 0, 7, 1, 10, 12]
// ,23,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,6,2,35,6,3,32,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,
let count = 0

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

console.log('sort-',quickSort(arr))