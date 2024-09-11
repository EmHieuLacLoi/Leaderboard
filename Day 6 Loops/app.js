// ------------------Level 1-----------------------
console.log('------------------Level 1-----------------------')

// let i = 0
// for (i = 0; i<= 10; i++) {
//     console.log(i)
// }
// i = 0
// while (i <= 10) {
//     console.log(i)
//     i++
// }
// i = 0
// do {
//     console.log(i)
//     i++
// } while(i <= 10)

// let i = 10
// for (i = 10; i>= 0; i--) {
//     console.log(i)
// }
// i = 10
// while (i >= 0) {
//     console.log(i)
//     i--
// }
// i = 10
// do {
//     console.log(i)
//     i--
// } while(i >= 0)

// let n = +prompt("N: ")
// for (let i = 0; i <= n;i++) {
//     console.log(i)
// }

let str = '#'
for (let i = 1; i <= 7; i++) {
    console.log(str)
    str = str + '#'
}

// for (let i = 0; i <= 10; i++) {
//     console.log(`${i} x ${i} = ${i*i}`)
// }

// console.log('i   i^2   i^3')
// for (let i = 0; i <= 10; i++) {
//     console.log(`${i}    ${i**2}     ${i**3}`)
// }

// for(let i=0; i <= 100; i++) {
//     if (i % 2 !== 0) /*(i % 2 === 0)*/ {
//         console.log(i)
//     }
// }

// const arr = Array(100).fill(true)
// for (let i = 0; i <= 100; i++) {
//     if (i >= 3) {
//         for (let j = Math.floor(i / 2); j >= 2; j--) {
//             if (i % j == 0) {
//                 arr[i] = false
//                 break
//             }
//         }
//     }
// }
// for(let i = 0; i <= 100; i++) {
//     if (arr[i] == true) console.log(i)
// }

let sum = 0
for (let i = 0; i <= 100; i++) {
    sum += i
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}.`)

let sumodd = 0, sumeven = 0
const sumarr = []
for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        sumodd += i
    }
    else {
        sumeven += i
    }
}
console.log(`The sum of all evens from 0 to 100 is ${sumeven}. And the sum of all odds from 0 to 100 is ${sumodd}.`)
sumarr.splice(0, 0, sumeven, sumodd)
console.log(sumarr)

const randomNumber = []
for (let i = 0; i < 5; i++) {
    randomNumber.push(Math.floor(Math.random() * 10))
}
console.log(randomNumber)

randomNumber.splice(0, randomNumber.length)
do {
    let check = Math.floor(Math.random() * 10)
    if (!randomNumber.includes(check)) {
        randomNumber.push(check)
    }

} while (randomNumber.length < 5)
console.log(randomNumber)

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const charactersLength = characters.length;
str = ''
for (let i = 0; i < 5; i++) {
    str += characters[Math.floor(Math.random() * charactersLength)]
}
console.log(str)


// ------------------Level 2-----------------------
console.log('------------------Level 2-----------------------')

let min = 5
let max = 100
let lengthOfRandomID = Math.floor(Math.random() * max) + min
str = ''
for (let i = 0; i < lengthOfRandomID; i++) {
    str += characters[Math.floor(Math.random() * charactersLength)]
}
console.log(str)

let hexString = (lengthOfRandomID - min).toString(16);
console.log(hexString, parseInt(hexString, 16))

let randomRGB = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]
console.log(`rgb(${randomRGB[0]},${randomRGB[1]},${randomRGB[2]})`)


const newCountries = []
const countryLength = []
for (const country of countries) {
    newCountries.push(country.toUpperCase())
    countryLength.push(country.length)
}
console.log(newCountries)
console.log(countryLength)

const arrOfArr = []
for (let i = 0; i < countries.length; i++) {
    const smallArr = [countries[i], newCountries[i].slice(0, 3), countryLength[i]]
    arrOfArr.push(smallArr)
}
console.log(arrOfArr)

const land = []
let includeStr = 'land'
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes(includeStr)) {
        land.push(countries[i])
    }
}
if (land.length == 0) {
    console.log(`All these countries are without ${includeStr}`)
} else {
    console.log(land)
}

const ia = []
includeStr = 'ia'
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes(includeStr)) {
        ia.push(countries[i])
    }
}
if (ia.length == 0) {
    console.log(`All these countries are without ${includeStr}`)
} else {
    console.log(ia)
}

let maxLength = Math.max(...countryLength)
let position = countryLength.indexOf(maxLength)
console.log(countries[position])

const fiveCharacters = []
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length == 5) {
        fiveCharacters.push(countries[i])
    }
}
console.log(fiveCharacters)

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
const webTechsLength = []
for (const web of webTechs) {
    webTechsLength.push(web.length)
}
position1 = webTechsLength.indexOf(Math.max(...webTechsLength))
console.log(webTechs[position1])

arrOfArr.splice(0, arrOfArr.length)
for (let i = 0; i < webTechs.length; i++) {
    smallArr = [webTechs[i], webTechsLength[i]]
    arrOfArr.push(smallArr)
}
console.log(arrOfArr)

const mernStack = ['MongoDB', 'Express', 'React', 'Node']
str = ''
for (const mern of mernStack) {
    str += mern[0]
}
console.log(str)

const fruit = ['banana', 'orange', 'mango', 'lemon']
let middleItem
for (let i = 0; i < Math.floor(fruit.length / 2); i++) {
    middleItem = fruit[i]
    fruit[i] = fruit[fruit.length - i - 1]
    fruit[fruit.length - i - 1] = middleItem
}
console.log(fruit)

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

for (const stack of fullStack) {
    if (Array.isArray(stack)) {
        for (let i = 0; i < stack.length; i++) {
            console.log(stack[i])
        }
    } else {
        console.log(stack)
    }
}

// ------------------Level 3-----------------------
console.log('------------------Level 3-----------------------')

const copyCountries = countries

const sortedCountries = copyCountries.sort()
console.log(sortedCountries)

webTechs.sort()
mernStack.sort()

console.log(land, countries[position])

fiveCharacters.splice(0, fiveCharacters.length)
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length == 4) {
        fiveCharacters.push(countries[i])
    }
}
console.log(fiveCharacters)

fiveCharacters.splice(0, fiveCharacters.length)
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes(' ')) {
        fiveCharacters.push(countries[i])
    }
}
console.log(fiveCharacters)

console.log(newCountries.reverse())