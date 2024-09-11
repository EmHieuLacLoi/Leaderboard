// ------------------Level 1-----------------------
console.log('------------------Level 1-----------------------')

// let yourAge = +prompt('Enter your age:', 21)
// if (yourAge >= 18) {
//     console.log('You are old enough to drive.')
// } else {
//     console.log(`You are left with ${18 - yourAge} years to drive.`)
// }

// let myAge = 21
// if (yourAge > myAge) {
//     console.log(`You are ${Math.abs(myAge - yourAge)} years older than me.`)
// } else if (yourAge < myAge) {
//     console.log(`You are ${Math.abs(myAge - yourAge)} years younger than me.`)
// } else {
//     console.log('We are the same.')
// }

let a = 4
let b = 3
if (a > b) {
    console.log('a is greater than b')
} else {
    console.log('a is less than b')
}
console.log(a > b ? 'a is greater than b' : 'a is less than b')

// let num = +prompt('Enter a number:')
// console.log(num % 2 == 0 ? `${num} is an even number` : `${num} is is an odd number.`)

// ------------------Level 2-----------------------
console.log('------------------Level 2-----------------------')

// let score = +prompt('Enter your score:')
// switch (true) {
//     case 80 <= score && score <= 100:
//         console.log('A')
//         break
//     case 70 <= score && score <= 79:
//         console.log('B')
//         break
//     case 60 <= score && score <= 69:
//         console.log('C')
//         break
//     case 50 <= score && score <= 59:
//         console.log('D')
//         break
//     case 0 <= score && score <= 49:
//         console.log('F')
//         break
//     default:
//         console.log('Something wrong!')
// }

let month = 'July'
switch (month) {
    case 'September':
        console.log('the season is Autumn.')
        break
    case 'October':
        console.log('the season is Autumn.')
        break
    case 'November':
        console.log('the season is Autumn.')
        break
    case 'December':
        console.log('the season is Winter.')
        break
    case 'January':
        console.log('the season is Winter.')
        break
    case 'February':
        console.log('the season is Winter.')
        break
    case 'March':
        console.log('the season is Spring.')
        break
    case 'April':
        console.log('the season is Spring.')
        break
    case 'May':
        console.log('the season is Spring.')
        break
    case 'June':
        console.log('the season is Summer.')
        break
    case 'July':
        console.log('the season is Summer.')
        break
    case 'August':
        console.log('the season is Summer.')
        break
    default:
        console.log('Something wrong!')
}

// let today = prompt('What is the day  today ?').trim().toLowerCase()
// switch (today) {
//     case 'monday':
//         console.log(`${today = today[0].toUpperCase() + today.substring(1, today.length)} is a working day.`)
//         break
//     case 'tuesday':
//         console.log(`${today = today[0].toUpperCase() + today.substring(1, today.length)} is a working day.`)
//         break
//     case 'wednesday':
//         console.log(`${today = today[0].toUpperCase() + today.substring(1, today.length)} is a working day.`)
//         break
//     case 'thursday':
//         console.log(`${today = today[0].toUpperCase() + today.substring(1, today.length)} is a working day.`)
//         break
//     case 'friday':
//         console.log(`${today = today[0].toUpperCase() + today.substring(1, today.length)} is a working day.`)
//         break
//     case 'saturday':
//         console.log(`${today = today[0].toUpperCase() + today.substring(1, today.length)} is a weekend.`)
//         break
//     case 'sunday':
//         console.log(`${today = today[0].toUpperCase() + today.substring(1, today.length)} is a weekend.`)
//         break
//     default:
//         console.log('It is not a week day.')
// }

// ------------------Level 3-----------------------
console.log('------------------Level 3-----------------------')

month = prompt('Enter a month:', 'February').trim().toLowerCase()
year = +prompt('Enter a year:')
month = month[0].toUpperCase() + month.substring(1, month.length)
switch (month) {
    case 'September':
        console.log(`${month} has 30 days.`)
        break
    case 'October':
        console.log(`${month} has 31 days.`)
        break
    case 'November':
        console.log(`${month} has 30 days.`)
        break
    case 'December':
        console.log(`${month} has 31 days.`)
        break
    case 'January':
        console.log(`${month} has 31 days.`)
        break
    case 'February':
        if (year % 4 == 0) {
            console.log(`${month} has 29 days.`)
        } else {
            console.log(`${month} has 28 days.`)
        }
        break
    case 'March':
        console.log(`${month} has 31 days.`)
        break
    case 'April':
        console.log(`${month} has 30 days.`)
        break
    case 'May':
        console.log(`${month} has 31 days.`)
        break
    case 'June':
        console.log(`${month} has 30 days.`)
        break
    case 'July':
        console.log(`${month} has 31 days.`)
        break
    case 'August':
        console.log(`${month} has 31 days.`)
        break
    default:
        console.log('Something wrong!')
}



