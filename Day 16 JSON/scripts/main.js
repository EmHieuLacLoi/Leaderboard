// ------------------Level 1-----------------------
console.log("------------------Level 1-----------------------");

const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`
const txt1 = JSON.stringify(skills, undefined, 4)
const txt2 = JSON.stringify(age, undefined, 4)
const txt3 = JSON.stringify(isMarried, undefined, 4)
console.log(txt1)
console.log(txt2)
console.log(txt3)

// ------------------Level 2-----------------------
console.log("------------------Level 2-----------------------");

const txt4 = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 4)
console.log(txt4)

// ------------------Level 3-----------------------
console.log("------------------Level 3-----------------------");

const obj = JSON.parse(txt, undefined, 4)
console.log(obj)

const arrObj = Object.entries(obj)
const manySkills = arrObj.reduce((acc, cur)=>{
    if (cur[1].skills.length > 3) {
        acc[cur[0]] = cur[1]
    }
    return acc
}, {})
console.log(manySkills)
