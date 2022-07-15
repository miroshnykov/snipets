let words = ['ss','swsw','banana', 'grapefruit', 'banana', 'grapefruit', 'banana', 'grapefruit', 'orange','dimon','dimon']

const sort = (arr) => {
    const temp = arr.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1
        return acc
    }, {})

    console.info(temp)
    // return temp
    const keys = Object.keys(temp)
    return keys.sort((a,b) =>{
        return temp[b] - temp[a]
    })
}
console.log(sort(words))
