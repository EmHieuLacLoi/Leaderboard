// ------------------Level 1-----------------------
console.log("------------------Level 1-----------------------");

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries1 = ['Finland', 'Sweden', 'Norway']

const emptySet = new Set()
for (let i = 0; i <= 10; i++) {
    emptySet.add(i)
}
console.log(emptySet)
emptySet.delete(2)
emptySet.clear()
const arr = ['a', 'b', 'c', 'd', 'e']
const setOfArr = new Set(arr)
console.log(setOfArr)

const nameCoutries = []
countries.forEach((country) => nameCoutries.push(country.name))
const coutryMap = new Map()
for (const n of nameCoutries) {
    coutryMap.set(n, n.length)
}
console.log(coutryMap)

// ------------------Level 2-----------------------
console.log("------------------Level 2-----------------------");

let c = [...a, ...b]
let C = new Set(c)
console.log(C)

let A = new Set(a)
let B = new Set(b)
let d = a.filter((num) => B.has(num))
let e = a.filter((num) => !B.has(num))
console.log(d, e)

// ------------------Level 3-----------------------
console.log("------------------Level 3-----------------------");

const arrLanguage = []
countries.forEach(function (country) {
    for (const lan of country.languages) {
            arrLanguage.push(lan)
    }
})
const setOfLanguages = new Set(arrLanguage)
console.log(setOfLanguages.size, arrLanguage)

function sortByKeys(arrOfObj) {
    arrOfObj.sort(function (a, b) {
        if (+Object.values(a) < +Object.values(b)) return 1
        if (+Object.values(a) > +Object.values(b)) return -1
        return 0
    })
    return arrOfObj
}
function mostSpokenLanguages(data, num) {
    const result = []
    let i = 0
    for(const ele of setOfLanguages) {
        const check = arrLanguage.filter((lan) => lan == ele)
        const obj = {}
        obj[ele] = check.length
        result.push(obj)
    }
    return sortByKeys(result).slice(0, num)
}
console.log(mostSpokenLanguages(countries, 3))
