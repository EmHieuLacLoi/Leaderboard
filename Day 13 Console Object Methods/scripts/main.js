// ------------------Level 1-----------------------
console.log("------------------Level 1-----------------------");

const countriesArr = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
console.group('Countries')
// console.table(countriesArr)
// console.table(countries)
console.groupEnd()

// ------------------Level 2-----------------------
console.log("------------------Level 2-----------------------");

console.assert(10 > 2 * 10, 'Expression failed!')
console.warn('This is warning message!')
console.error('This is error message!')

// ------------------Level 3-----------------------
console.log("------------------Level 3-----------------------");
let i = 0, sum = 0
const arr = [1, 2, 3, 4, 5, 6]
console.time('While')
while (i < arr.length) {
    sum += arr[i]
    i++
}
console.timeEnd('While')

sum = 0
console.time('For')
for (let j = 0; j < arr.length; j++) {
    sum+= arr[j]
}
console.timeEnd('For')

sum = 0
console.time('For of')
for (const a of arr) {
    sum+= a
}
console.timeEnd('For of')

sum = 0
console.time('forEach')
arr.forEach((a) => sum += a)
console.timeEnd('forEach')

