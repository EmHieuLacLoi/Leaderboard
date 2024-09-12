// ------------------Level 1-----------------------
console.log('------------------Level 1-----------------------')

function fullName(param) {
    console.log(param)
}
// fullName('Vo Trung Hieu')

// Normal function / Declaration function
function fullName(firstName, lastName) {
    console.log(firstName + ' ' + lastName)
}
// fullName('Vo Trung Hieu')

function addNumbers(param1, param2) {
    return param1 + param2
}
// console.log(addNumbers(2, 3))

// Arrow function
const areaOfRectangle = (l, w) => {
    return l * w
}
// console.log(areaOfRectangle(2, 3))

const perimeterOfRectangle = (l, w) => 2 * (l + w)
// console.log(perimeterOfRectangle(2, 3))

// Self invoking function
let volumeOfRectPrism = (function (l, w, h) {
    return l * w * h
})(1, 2, 3)
// console.log(volumeOfRectPrism)

// Expression function
const areaOfCircle = function (r) {
    return Math.PI * r * r
}
// console.log(areaOfCircle(3))

function circumOfCircle(r) {
    console.log(2 * Math.PI * r)
}
// circumOfCircle(2)

const density = (mass, volume) => mass / volume
// console.log(density(10, 2))

const speed = (distance, time) => distance / time
// console.log(speed(10, 2))

const weight = (mass, gravity) => mass * gravity
// console.log(weight (10, 2))

const oF = oC => (oC * 9 / 5) + 32
console.log(oF(0))

function BMI(w, h) {
    return w / (h * h)
}

let person = BMI(70, 1.7)
switch (true) {
    case person < 18.5:
        console.log('Underweight')
        break
    case person <= 24.9 && person >= 18.5:
        console.log('Normal weight')
        break
    case person >= 25 && person <= 29.9:
        console.log('Overweight')
        break
    case person >= 30:
        console.log('Obese')
        break
    default:
        console.log('Something wrong!')
}

function checkSeason(month) {
    month = +month
    if (month <= 3) console.log('Spring')
    if (month > 3 && month <= 6) console.log('Summer')
    if (month > 6 && month <= 9) console.log('Autumn')
    if (month > 9 && month <= 12) console.log('Winter')
    if (month <= 0 || month > 12) console.log('Something wrong!')
}
// checkSeason(1.5)

function findMax(a, b, c) {
    return Math.max(a, Math.max(b, c))
}
// console.log(findMax(0, -10, -2))

// ------------------Level 2-----------------------
console.log('------------------Level 2-----------------------')

function solveLinEquation(a, b, c) {
    let choose = prompt("choose value:")
    let x, y
    if (choose == 'x' && b != 0) {
        x = +prompt('x = ')
        y = (-a * x + c) / b
    }
    if (choose == 'y' && a != 0) {
        y = +prompt('y = ')
        x = (-b * y + c) / a
    }
    return [x, y]
}
// console.log(solveLinEquation(2, 3, -6))

function solveQuadratic(a = 0, b = 0, c = 0) {
    let denta = b ** 2 - 4 * a * c
    if (denta < 0) return 'No solution!'
    else if (denta == 0) return [-b / (2 * a)]
    else return [(-b + Math.sqrt(denta)) / (2 * a), (-b - Math.sqrt(denta)) / (2 * a)]
}
// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}

const printArray = (arr) => {
    for (const element of arr) {
        console.log(element)
    }
}
// printArray([1, 2, 3, 4])

function showDateTime() {
    let time = new Date()
    console.log(`${time.getDate()}/${time.getMonth()}/${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}`)
}
// showDateTime()

function swapValues(a, b) {
    b = [a, a = b][0]
    return a, b
}
// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4

function reverseArray(arr) {

    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        // let a = arr[i]
        // arr[i] = arr[arr.length - i - 1]
        // arr[arr.length - i - 1] = a

        let a = arr[arr.length - i - 1]
        a, arr[arr.length - i - 1] = swapValues(arr[i], arr[arr.length - i - 1])
        arr[i] = a
    }
    return arr
}
console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']

function capitalizeArray(arr) {
    const newArr = []
    for (const element of arr) {
        newArr.push(element.toUpperCase())
    }
    return newArr
}
// console.log(capitalizeArray(['hello', 'hi']))

function addItem(arr, param) {
    arr.push(param)
    return arr
}
// console.log(addItem([1, 2, 3, 4], 5))

function addItem(arr, index) {
    arr.splice(index, 1)
    return arr
}
// console.log(addItem([1, 2, 3, 4], 2))

function sumOfNumbers(num) {
    let sum = 0
    for (let i = 0; i <= num; i++) {
        sum += i
    }
    return sum
}
// console.log(sumOfNumbers(3))

function sumOfOdds(num) {
    let sum = 0
    for (let i = 0; i <= num; i++) {
        if (i % 2 !== 0) {
            sum += i
        }
    }
    return sum
}

function sumOfEven(num) {
    return sumOfNumbers(num) - sumOfOdds(num)
}
// console.log(sumOfOdds(3), sumOfEven(3))

function evensAndOdds(num) {
    let even = 0, odd = 0
    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            even++
        } else {
            odd++
        }
    }
    return [even, odd]
}
// let check = evensAndOdds(100)
// console.log(`The number of odds are ${check[1]}.`)
// console.log(`The number of evens are ${check[0]}.`)

const sum = (...args) => {
    let s = 0
    for (const num of args) {
        s += num
    }
    return s
}
// console.log(sum(1, 2, 3, 4))

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const charactersLength = characters.length;
function randomUserIp(num, countMax = 4, str = ':') {
    let ip = '', count = 0

    for (let i = 0; i <= num; i++) {
        if (count == countMax) {
            ip += str
            count = 0
        } else {
            ip += characters[Math.floor(Math.random() * charactersLength)]
            count++
        }
    }
    return ip
}
// console.log(randomUserIp(38))

const randomMacAddress = (num, countMax, str) => {
    return randomUserIp(num, countMax, str)
}
// console.log(randomMacAddress(16, 2, '-'))

function randomHexaNumberGenerator(value) {
    let num = Math.floor(Math.random() * value)
    if (num < 16) {
        return '0' + num.toString(16)
    } else return num.toString(16)
}
console.log(randomHexaNumberGenerator(20));

function userIdGenerator(num) {
    return randomUserIp(num, num, '')
}
console.log(userIdGenerator(6))

// ------------------Level 3-----------------------
console.log('------------------Level 3-----------------------')

function userIdGeneratedByUser() {
    let numberOfCharacters = +prompt('number of characters')
    let numberOfIDs = +prompt('number of ids')
    for (let i = 0; i < numberOfIDs; i++) {
        console.log(userIdGenerator(numberOfCharacters))
    }
}
// userIdGeneratedByUser()

function rgbColorGenerator() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
}
// rgbColorGenerator()

function arrayOfHexaColors(num) {
    let arr = []
    for (let i = 0; i < num; i++) {
        let str = '#' + randomHexaNumberGenerator(255) + randomHexaNumberGenerator(255) + randomHexaNumberGenerator(255)
        arr.push(str)
    }
    return arr
}
// console.log(arrayOfHexaColors(3))

function generateColors(type, num) {
    let arr = []
    if (type == 'hexa') {
        return arrayOfHexaColors(num)
    }
    if (type == 'rgb') {
        for (let i = 0; i < num; i++) {
            arr.push(rgbColorGenerator())
        }
        return arr
    }
    return 'Something wrong!'
}
// console.log(generateColors('hexa', 3))
// console.log(generateColors('rgb', 3))

function shuffleArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        let b = Math.floor(Math.random() * (arr.length - 1))
        let a = arr[b]
        a, arr[b] = swapValues(arr[i], arr[b])
        arr[i] = a
    }
    return arr
}
// console.log(shuffleArray([1, 2, 3, 4, 5]))

function factorial(num) {
    fact = 1
    for (let i = 2; i <= num; i++) {
        fact *= i
    }
    return fact
}
// console.log(factorial(3))

const empty = (param) => {
    return !param || param.length === 0
}
// console.log(empty(''))

function checkNumberType(num) {
    if (isNaN(parseInt(num))) return false
    else return true
}

function average(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (checkNumberType(arr[i])) sum += +arr[i]
        else {
            return `${arr[i]} is not number!`
        }
    }
    return Math.floor(sum / arr.length)
}
// console.log(average([1, 2, 3, 4, '5', 'str']))

function modifyArray(arr) {
    if (arr.length < 5) return 'Not Found'
    arr[4] = arr[4].toUpperCase()
    return arr
}
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']))

function isPrime(num) {
    for (let i = Math.floor(num / 2); i >= 2; i--) {
        if (num % i == 0) return false
    }
    return true;
}
// console.log(isPrime(31))

function isUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i !== arr.lastIndexOf(arr[i])) {
            return false
        }
    }
    return true
}
// console.log(isUnique([1, 2, 3, 4, 1]))

function dataType(arr) {
    let type = typeof arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (type !== typeof arr[i]) return false
    }
    return true
}
// console.log(dataType([1, 2, '3']))

function sevenRandomNumbers() {
    const arr = []
    while (arr.length <= 7) {
        let num = Math.floor(Math.random() * 10)
        if (!arr.includes(num)) arr.push(num)
    }    
    return arr
}
// console.log(sevenRandomNumbers())

function reverseCountries() {
    const newCountries = countries
    return reverseArray(newCountries)
}
console.log(reverseCountries())