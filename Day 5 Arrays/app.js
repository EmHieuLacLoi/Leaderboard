// ------------------Level 1-----------------------
console.log('------------------Level 1-----------------------')

const emptyArray = []
const fiveElementsArray = [1, 2, 3, 4, 5]
console.log('Length of 5 elements array: ', fiveElementsArray.length)
console.log('First item: ', fiveElementsArray[0], 'Middle item: ',
    fiveElementsArray[Math.floor((fiveElementsArray.length - 1) / 2)],
    'Last item: ', fiveElementsArray[fiveElementsArray.length - 1])
const mixedDataTypes = [1, true, 'string', null, undefined, [2, 3, 4]]
console.log(mixedDataTypes)
let str = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const itCompanies = str.split(', ')
const last = itCompanies.length - 1
console.log(itCompanies, last + 1, itCompanies[0], itCompanies[Math.floor(last / 2)], itCompanies[last])
console.log(itCompanies.join('\n'))
console.log(itCompanies.join(', ').toUpperCase())
let lastItem = itCompanies[last]
itCompanies.pop()
console.log(itCompanies.join(', '), ' and ', lastItem, ' are big IT companies.')
itCompanies.push(lastItem)
let findCompany = 'Microsofts'
if (itCompanies.indexOf(findCompany) !== -1) {
    console.log(findCompany)
} else {
    console.log(`${findCompany} is not found!`)
}
console.log(itCompanies.join('\n').match(/[A-Z]*o.*o[A-Z]*/gi))
console.log(itCompanies.sort())
console.log(itCompanies.reverse())
console.log(itCompanies.slice(0, 3), itCompanies.slice(last - 2, last + 1))
console.log(itCompanies.slice(Math.floor(last / 2), Math.ceil(last / 2) + 1))
itCompanies.shift()
console.log(itCompanies)
itCompanies.splice(Math.floor(last / 2), 1)
console.log(itCompanies)
itCompanies.pop()
console.log(itCompanies)
itCompanies.splice(0, itCompanies.length)
console.log(itCompanies)

// ------------------Level 2-----------------------
console.log('------------------Level 2-----------------------')

let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
text = text.split('. ')
let a = text[0].split(' ')
let b = text[1].split(', ')
let c = b[0].split(' ')
b.shift()
let newLastItemB = b[b.length - 1].split('.').shift()
b.splice(b.length - 1, 1, newLastItemB)
const words = a.concat(c.concat(b))
console.log(words)
console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
let findItem = 'Meat'
if (!shoppingCart.includes(findItem)) {
    shoppingCart.unshift(findItem)
    console.log(shoppingCart)
}

findItem = 'Sugar'
if (!shoppingCart.includes(findItem)) {
    shoppingCart.push(findItem)
    console.log(shoppingCart)
}

let allergicToHoney = true
findItem = 'Honey'
if (allergicToHoney && shoppingCart.includes(findItem)) {
    shoppingCart.splice(shoppingCart.indexOf(findItem), 1)
    console.log(shoppingCart)
}

findItem = 'Tea'
if (shoppingCart.indexOf(findItem) !== -1) {
    let a = shoppingCart.indexOf(findItem)
    shoppingCart[a] = 'Green Tea'
    console.log(shoppingCart)
}

findItem = 'Ethiopia'
if (countries.indexOf(findItem) !== -1) {
    console.log(findItem.toUpperCase())
} else {
    countries.push(findItem)
    console.log(countries)
}
findItem = 'Sass'
if (webTechs.indexOf(findItem) !== -1) {
    console.log(findItem.toUpperCase(), ' is a CSS preprocess.')
} else {
    webTechs.push(findItem)
    console.log(webTechs)
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

// ------------------Level 3-----------------------
console.log('------------------Level 3-----------------------')
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let lastAge = ages.length - 1
ages.sort()
console.log(ages[0], ages[lastAge])
if ((lastAge + 1) % 2 == 0) {
    console.log((ages[Math.floor(lastAge / 2)] + ages[Math.ceil(lastAge / 2)]) / 2)
} else {
    console.log(ages[lastAge / 2])
}
let averageAge = (ages[0] + ages[1] + ages[2] + ages[3] + ages[4] + ages[5] + ages[6] + ages[7] + ages[8] + ages[lastAge]) / ages.length
console.log(Math.ceil(averageAge), ages[lastAge] - ages[0])
console.log(Math.abs(ages[0] - averageAge) < Math.abs(ages[lastAge] - averageAge) ?
    `value of (min - average) < (max - average)` : `value of (min - average) > (max - average)`)

console.log(countries.slice(0, 10))

let mid = countries.length / 2
console.log(mid)
if (Number.isInteger(mid)) {
    console.log(countries[mid])
    const a = countries.slice(0, mid)
    const b = countries.slice(mid + 1, countries.length)
    console.log(a, b) 
} else {
    console.log(countries[Math.floor(mid)] , countries[Math.ceil(mid)])
    const a = countries.slice(0, Math.floor(mid) + 1)
    const b = countries.slice(Math.ceil(mid), countries.length)
    console.log(a, b) 
}




