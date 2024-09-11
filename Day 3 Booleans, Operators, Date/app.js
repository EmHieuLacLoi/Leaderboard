// ------------------Level 1-----------------------
console.log('------------------Level 1-----------------------')
let firstName, lastName, country, city, age, isMarried, year
console.log(typeof (firstName = 'Vo'), typeof (lastName = 'Hieu'), typeof (country = 'VN'), typeof city, typeof (age = 21), typeof (isMarried = false), typeof (year = '2003'))
console.log(10 === '10', parseInt('9.8') == 10)
console.log(10 == '10', 1 == true, null == undefined)
console.log(10 === '10', 1 === true, undefined === null, 4 != '4', !(false))
const time = new Date()
console.log(time.getFullYear(), time.getMonth() + 1, time.getDate(), time.getUTCDay(), time.getHours(), time.getMinutes(), Date.now())

// ------------------Level 2-----------------------
console.log('------------------Level 2-----------------------')
// let base = prompt('Enter base')
// let height = prompt('Enter height')
// console.log(`The area of the triangle is ${0.5 * base * height}`)

// let a = parseInt(prompt('Enter side a'))
// let b = parseInt(prompt('Enter side b'))
// let c = parseInt(prompt('Enter side c'))
// console.log(`The perimeter of the triangle is ${a + b + c}`)

// let length = parseInt(prompt('Enter length'))
// let width = parseInt(prompt('Enter width'))
// console.log(`The area of the triangle is ${length * width} and the perimeter is ${2 * (length + width)}`)

// let hours = parseInt(prompt('Enter hours'))
// let ratePerHour = parseInt(prompt('Enter rate per hour'))
// console.log(`Your weekly earning is ${hours * ratePerHour}`)

// let Name = prompt('Enter your name')
// console.log(Name.length > 7 ? 'Your name is long' : 'Your name is short')

// firstName = prompt('Enter your firstName')
// lastName = prompt('Enter your lastName')
// console.log(`Your first name, ${firstName} is ${firstName.length > lastName.length ? 'longer' : 'shorter'} than your family name, ${lastName}`)

let myAge = 20, yourAge = 250
console.log(`I am ${myAge > yourAge ? myAge - yourAge : yourAge - myAge} years ${myAge > yourAge ? 'older' : 'younger'} than you.`)

// let birthYear = parseInt(prompt('Enter birth year', 2009))
// let check = time.getFullYear() - birthYear
// console.log(`You are ${check}. You ${check >= 18 ? 'are old enough to drive' : ('will be allowed to drive after ' + (18 - check) + ' years.')}`)

// let yearLive = parseInt(prompt('Enter number of years you live', 100))
// console.log(`You lived ${yearLive * 365 * 24 * 60 * 60} seconds.`)

console.log(`${time.getUTCFullYear()}-${time.getMonth() + 1}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}`)
console.log(`${time.getDate()}-${time.getMonth() + 1}-${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}`)
console.log(`${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}`)

// ------------------Level 3-----------------------
console.log('------------------Level 3-----------------------')
console.log(`${time.getUTCFullYear()}-${time.getMonth() + 1}-${time.getDate()} ${time.getHours() < 10 ?  '0' + time.getHours() : time.getHours()}:${time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()}`)

