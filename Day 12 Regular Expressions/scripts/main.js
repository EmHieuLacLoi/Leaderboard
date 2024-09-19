// ------------------Level 1-----------------------
console.log("------------------Level 1-----------------------");

let text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
let pattern = /\d+/g
let check = text.match(pattern)
let sum = check.reduce((acc, cur) => acc += +cur, 0)
console.log(check, sum)

let particles = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.'
let pattern1 = /[-]?\d/g
const points = particles.match(pattern1)
const sortedPoints = points.sort((a, b) => a - b)
let distance = Math.abs(+sortedPoints[0]) + Math.abs(+sortedPoints[sortedPoints.length-1])
console.log(sortedPoints)
console.log(distance)

function is_valid_variable(text) {
    let pattern2 = /^[A-Za-z_][a-z_]*$/g
    return pattern2.test(text)
}
console.log(is_valid_variable('first_name'), is_valid_variable('first-name'), is_valid_variable('1first_name'), is_valid_variable('firstname'))

// ------------------Level 2-----------------------
console.log("------------------Level 2-----------------------");

function tenMostFrequentWords(paragraph, num = 0) {
    let pattern = /\b\w+\b/gi
    const chars = paragraph.match(pattern)
    chars.sort()
    const result = []
    let j = 0
    result.push({word: chars[0], count:1})
    for (let i = 1; i < chars.length; i++) {
        if (result[j].word == chars[i]) {
            +result[j].count++
        }
        else {
            result.push({word: chars[i], count:1})
            j++
        }
    }

    result.sort(function(a, b) {
        if (a.count < b.count) return 1
        if (a.count > b.count) return -1
        return 0
    })
    
    const finalResult = num > 0 ? result.slice(0, num) : result
    return finalResult
}
paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
console.log(tenMostFrequentWords(paragraph, 10))

// ------------------Level 3-----------------------
console.log("------------------Level 3-----------------------");

function cleanText(text) {
    let pattern = /[!--]*[/]*[:-@]*[[-`]*[{-~]*/gi
    return text.replace(pattern, '')
}
sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
console.log(cleanText(sentence))
console.log(tenMostFrequentWords(cleanText(sentence), 3))