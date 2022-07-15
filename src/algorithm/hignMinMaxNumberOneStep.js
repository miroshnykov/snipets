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